import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitionComponent } from './exhibition-item/exhibition.component';
import { HomeComponent } from '../app/main-website/home/home.component';
import { GalleryComponent } from '../app/main-website/gallery/gallery.component';
import { VenueHireComponent } from './venue-hire/venue-hire.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from '../app/main-website/about/about.component';
import {ExhibitionListComponent} from './exhibition-list/exhibition-list.component';
import { ExhibitionDetailsComponent} from './exhibition-details/exhibition-details.component';
// import { CategoryComponent } from './admin/category/category.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {LoginComponent} from './admin-dashboard/login/login.component'
import { RegisterComponent } from './admin-dashboard/register/register.component';
import { ForgotPasswordComponent } from './admin-dashboard/forgot-password/forgot-password.component';
import { LaunchAdminComponent } from './admin-dashboard/launch-admin/launch-admin.component';
import { EventComponent } from './admin-dashboard/launch-admin/event/event.component';
import {CategoryComponent} from './admin-dashboard/launch-admin/category/category.component';
import { EventGalleryComponent } from './admin-dashboard/launch-admin/event-gallery/event-gallery.component';
import { ShopManagerComponent } from './admin-dashboard/launch-admin/shop-manager/shop-manager.component';
import { VenueManagerComponent } from './admin-dashboard/launch-admin/venue-manager/venue-manager.component';
import { UserManagerComponent } from './admin-dashboard/launch-admin/user-manager/user-manager.component';
import { VenueComponent } from './main-website/venue/venue.component';
import { EventlistComponent } from './main-website/eventlist/eventlist.component';
import { InfoComponent } from './admin-dashboard/launch-admin/info/info.component';
import { CartComponent } from './main-website/cart/cart.component';
const routes: Routes = [
 { path:'events',
   component: ExhibitionComponent,
   children: [
     
   ]
  },
  {path:'event-list', component:EventlistComponent},
  {path:'event-details', component: ExhibitionDetailsComponent},
 { path:'home', pathMatch:'full', component: HomeComponent},
  { path:'*/', pathMatch:'full', component: HomeComponent},
 { path:'gallery', component: GalleryComponent},
 { path:'venue-hire', component: VenueComponent},
 { path:'shop', component: ShopComponent},
 {path:'cart', component:CartComponent},
 {path:'admin-dashboard/login', component: LoginComponent,},
 {path:'admin-dashboard/register', component: RegisterComponent,},
 {path:'admin-dashboard', component: AdminDashboardComponent,
children:[
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'launch-admin', component:LaunchAdminComponent,
    children:[
      {path:'event', component:EventComponent},
      {path :'category', component:CategoryComponent},
      {path: 'gallery', component:EventGalleryComponent},
      {path: 'shop-manager', component:ShopManagerComponent},
      {path: 'venue-manager', component:VenueManagerComponent},
      {path:'user-manager', component:UserManagerComponent},
      {path: 'info', component:InfoComponent}
    ]
  }]},
 { path:'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
