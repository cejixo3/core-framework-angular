import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {forkJoin} from 'rxjs';
import {IAttribute} from '../../../../../Interfaces/DataStructures/IAttribute';
import {IModel} from '../../../../../Interfaces/DataStructures/Models/IModel';
import {IUploadResult, IUploadOptions, UploadFileService} from '../../../../../Services/UploadFileService';


@Component({
    selector: 'ui-form-file',
    templateUrl: './FileComponent.html',
    styleUrls: ['./FileComponent.scss']
})
export class FileComponent {
    progress = {};
    canBeClosed = true;
    showCancelButton = true;
    uploading = false;
    uploadSuccessful = false;
    public BUTTON_STATES = {
        WAIT_FOR_SELECT: 1,
        WAIT_FOR_SEND: 2,
        WAIT_FOR_RESPONSE: 3
    };

    public buttonState = this.BUTTON_STATES.WAIT_FOR_SELECT;


    constructor(public uploadService: UploadFileService) {
    }

    @Input() accept = '';
    @Input() options: IUploadOptions = {url: 'localhost'};
    @Output() done: EventEmitter<IUploadResult> = new EventEmitter<IUploadResult>();
    @ViewChild('file', {static: false}) file;
    public files: Set<File> = new Set();


    /**
     * Is Button isDisabled or not
     */
    public isDisabled(): boolean {
        return this.buttonState === this.BUTTON_STATES.WAIT_FOR_RESPONSE;
    }

    /**
     * Provide button styles
     */
    public buttonStyles(): string {
        const styles = ['btn'];
        if (this.buttonState === this.BUTTON_STATES.WAIT_FOR_SELECT) {
            styles.push('btn-primary');
        }
        if (this.buttonState === this.BUTTON_STATES.WAIT_FOR_SEND) {
            styles.push('btn-success');
        }
        return styles.join(' ');
    }

    /**
     * Provide label
     */
    public buttonLabel(): string {
        switch (this.buttonState) {
            case this.BUTTON_STATES.WAIT_FOR_SELECT:
                return 'Browse Files';
            case this.BUTTON_STATES.WAIT_FOR_SEND:
                return 'Upload';
            case this.BUTTON_STATES.WAIT_FOR_RESPONSE:
                return 'Uploading';
        }
        return 'Error';
    }

    /**
     * Make action do
     */
    public do() {
        switch (this.buttonState) {
            case this.BUTTON_STATES.WAIT_FOR_SELECT:
                this.file.nativeElement.click();
                break;
            case this.BUTTON_STATES.WAIT_FOR_SEND:
                this.send();
                break;
            case this.BUTTON_STATES.WAIT_FOR_RESPONSE:
        }
    }

    /**
     * Send files to the service
     */
    private send() {

        let files = [];
        for (const i in this.files) {
            files.push({file: this.files[i], title: '', label: ''});
        }
        const result = this.progress = this
            .uploadService
            .upload(
                files,
                this.options
            );
        this.buttonState = this.BUTTON_STATES.WAIT_FOR_RESPONSE;
        const allProgressObservables = [];
        for (let key in this.progress) {
            allProgressObservables.push(this.progress[key].progress);
        }
        this.canBeClosed = false;
        this.showCancelButton = false;
        forkJoin(allProgressObservables).subscribe(end => {
            this.canBeClosed = true;
            this.uploadSuccessful = true;
            this.uploading = false;
            this.done.emit(result);
            this.buttonState = this.BUTTON_STATES.WAIT_FOR_SELECT;
            this.files.clear();
        });
    }

    /**
     * When user selects files
     */
    public onFilesAdded() {
        this.buttonState = this.BUTTON_STATES.WAIT_FOR_SEND;
        const files: { [key: string]: File } = this.file.nativeElement.files;
        this.files.clear();
        for (let key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
            }
        }
    }
}
