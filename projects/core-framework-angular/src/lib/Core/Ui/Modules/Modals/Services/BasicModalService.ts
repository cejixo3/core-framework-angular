import {
    ApplicationRef, Component, ComponentFactoryResolver, EmbeddedViewRef, Injectable,
    Injector
} from '@angular/core';
import {BasicModalComponent} from '../Components/BasicModal/BasicModalComponent';
import {ConfirmModalComponent} from '../Components/ConfirmModal/ConfirmModalComponent';

@Injectable()
export class BasicModalService {

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private appRef: ApplicationRef,
                private injector: Injector) {
    }

    private open(root: any, component: any, $context: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {

            const modalComponentRef = this.componentFactoryResolver.resolveComponentFactory(root).create(this.injector);
            this.appRef.attachView(modalComponentRef.hostView);

            const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
            Object.assign(componentRef.instance, $context);
            componentRef.instance['resolve'] = (r: any) => {
                resolve(r);
                this.appRef.detachView(modalComponentRef.hostView);
                modalComponentRef.destroy();
            };
            componentRef.instance['reject'] = (r: any) => {
                reject(r);
                this.appRef.detachView(modalComponentRef.hostView);
                modalComponentRef.destroy();
            };
            // @todo check TS error
            modalComponentRef.instance['component'] = <Component>componentRef;

            const domElem = (modalComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
            document.body.appendChild(domElem);
        });
    }

    basic(component: Component | any, $context: any): Promise<any> {
        return this.open(BasicModalComponent, component, $context);
    }

    confirm(title?: string, text?: string) {
        return this.open(BasicModalComponent, ConfirmModalComponent, {title: title, text: text});
    }
}