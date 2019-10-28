import {ServiceLocator} from '@Core/ServiceLocator';
import {BreadCrumbs} from '@Core/Services/BreadCrumbs';

export abstract class ABreadCrumbComponent {

    private bc: BreadCrumbs;

    public constructor() {
        this.bc = ServiceLocator.injector.get(BreadCrumbs);
    }

    public isBreadCrumbEnabled(): boolean {
        return true;
    }

    protected set breadCrumb(val: string) {
        if (this.isBreadCrumbEnabled() === true) {
            this.bc.add(val);
        }
    }
}
