import { NgModule} from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { EventService } from '../shared/services/event.service';
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { UserService } from '../shared/services/user.service';
import { VenueService } from '../shared/services/venue.service';
import { ProductService } from '../shared/services/product.service';
import { StorageServiceModule} from 'ngx-webstorage-service';
import { LocalStorageService } from '../shared/services/local-storage.service';
@NgModule({
    imports :[
        
        StorageServiceModule
    ],
    exports:[
        
    ],
    providers:[
        CategoryService,
        EventService,
        UserService,
        VenueService,
        ProductService,
        LocalStorageService
    ]
})

export class ServicesModule{

}