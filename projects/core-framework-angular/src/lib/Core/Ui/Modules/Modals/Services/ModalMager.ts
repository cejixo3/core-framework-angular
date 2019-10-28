import {IModalManager} from '../Interfaces/IModalManager';

export class ModalManager implements IModalManager {


    public resolve: (r: any) => void = () => {
        console.log('nop');
    };

    public reject: (r: any) => void = () => {
        console.log('nop');
    };

    constructor() {

    }


    submit(r?: any): void {
        this.resolve(r);
    }

    cancel(r?: any): void {
        this.reject(r);
    }
}