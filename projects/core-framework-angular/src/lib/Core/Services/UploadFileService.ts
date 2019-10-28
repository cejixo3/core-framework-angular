import {HttpEventType, HttpHeaders, HttpRequest, HttpResponse, HttpResponseBase} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {SL} from '../SL';

export interface IUploadOptions {
    url: string;
    filesFormNames?: string;
    form?: { [key: string]: string };
    headers?: { [key: string]: string };
    method?: string;
}

export interface IUploadResult {
    [fileName: string]: {
        progress: Observable<number>,
        response: null | HttpResponse<any>
    };
}

@Injectable()
export class UploadFileService {

    /**
     * Upload files to server
     * @param {{ file: File, title: string, alt: string }[]} files
     * @param {IUploadOptions} options
     * @return {IUploadResult}
     */
    public upload(files: { file: File, title: string, alt: string }[], options: IUploadOptions): IUploadResult {
        const status: IUploadResult = {};
        files.forEach(file => {
            const formData: FormData = new FormData(),
                headers = new HttpHeaders();
            if (typeof options.form === 'object') {
                Object.keys(options.form).forEach((name: string) => {
                    if (options.form[name]) {
                        formData.append(name, options.form[name]);
                    }
                    if (file.hasOwnProperty(name)) {
                        formData.append(name, file[name]);
                    }
                });
            }

            formData.append(options.filesFormNames ? options.filesFormNames : 'files', file.file, file.file.name);

            if (typeof options.headers === 'object') {
                Object.keys(options.headers).forEach((name: string) => {
                    headers.append(name, options.headers[name]);
                });
            }
            const req = new HttpRequest(options.method ? options.method : 'POST', options.url, formData, {
                    reportProgress: true,
                    headers: headers
                }),
                progress = new Subject<number>();
            status[file.file.name] = {
                progress: progress.asObservable(),
                response: null
            };

            SL.http().request(req).subscribe(event => {
                if (event.type === HttpEventType.UploadProgress) {
                    const percentDone = Math.round(100 * event.loaded / event.total);
                    progress.next(percentDone);
                } else if (event instanceof HttpResponse) {
                    status[file.file.name].response = event;
                    progress.complete();
                }
            });
        });

        return status;
    }
}
