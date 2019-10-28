import {Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {IDataProviderFactory} from './Interfaces/DataProvider/IDataProviderFactory';
import {BasicModalService} from './Ui/Modules/Modals/Services/BasicModalService';
import {CollectionQuery} from "./Providers/CollectionQuery";

class SL {


    public injector: Injector; // @dynamic
    public dataProviderFactory: IDataProviderFactory;

    // @dynamic
    public http(): HttpClient {
        return this.injector.get(HttpClient);
    }

    public toaster(): ToastrService {
        return this.injector.get(ToastrService);
    }

    public modal(): BasicModalService {
        return this.injector.get(BasicModalService);
    }

    public colQuery(): CollectionQuery {
        return this.injector.get(CollectionQuery);
    }

    public setDataProviderFactory(dpf: IDataProviderFactory) {
        this.dataProviderFactory = dpf;
    }

    /**
     * Provide instance of data provider
     * @returns {IDataProviderFactory}
     */
    public getDataProviderFactory(): IDataProviderFactory {
        return this.dataProviderFactory;
    }
}

export var ServiceLocator = new SL();
