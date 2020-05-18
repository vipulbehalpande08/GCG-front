import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule} from './modules/angular-material.module';
import {ServicesModule} from './modules/services.module';
import { AppRoutingModule } from './app-routing.module';
// import {ComponentModule} from './modules/component.module'
import { AppComponent } from './app.component';
import { TopHeaderComponent } from '../app/main-website/top-header/top-header.component';
import { ExhibitionComponent } from './exhibition-item/exhibition.component';
import { HomeComponent } from '../app/main-website/home/home.component';
import { GalleryComponent } from '../app/main-website/gallery/gallery.component';
import { VenueHireComponent } from './venue-hire/venue-hire.component';
import { ShopComponent } from './shop/shop.component';
//import { SidenavComponent } from './admin/sidenav/sidenav.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ExhibitionListComponent } from './exhibition-list/exhibition-list.component';
import { ArtistComponent } from './artist/artist.component';
import { AboutComponent } from '../app/main-website/about/about.component';
import { TopNavBarService } from './service/top-navbar.service';
import { ExhibitionDetailsComponent } from './exhibition-details/exhibition-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from '../app/main-website/footer/footer.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FooterService } from './service/footer.service';
import { EventService } from './service/event.service'; 
import { CategoryService } from './service/category.service';
import { HttpClientModule } from '@angular/common/http';
// import { CategoryComponent } from './admin/category/category.component';
import { CategoryComponent } from './admin-dashboard/launch-admin/category/category.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './admin-dashboard/login/login.component';
import { RegisterComponent } from './admin-dashboard/register/register.component';
import { ForgotPasswordComponent } from './admin-dashboard/forgot-password/forgot-password.component';
import { LaunchAdminComponent } from './admin-dashboard/launch-admin/launch-admin.component';
import { SidebarComponent } from './admin-dashboard/launch-admin/sidebar/sidebar.component';
import { EventComponent } from './admin-dashboard/launch-admin/event/event.component';
import { EventGalleryComponent } from './admin-dashboard/launch-admin/event-gallery/event-gallery.component'; 
import { ShopManagerComponent } from './admin-dashboard/launch-admin/shop-manager/shop-manager.component';
import { VenueManagerComponent } from './admin-dashboard/launch-admin/venue-manager/venue-manager.component';
import { UserManagerComponent } from './admin-dashboard/launch-admin/user-manager/user-manager.component';
import { MainWebsiteComponent } from './main-website/main-website.component';
import { VenueComponent } from './main-website/venue/venue.component';
import { EventlistComponent } from './main-website/eventlist/eventlist.component';
import { InfoComponent } from './admin-dashboard/launch-admin/info/info.component';
import { CartComponent } from './main-website/cart/cart.component';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  pagination:{
    el:'.swiper-pagination',
    type:'bullets'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    ExhibitionComponent,
    HomeComponent,
    GalleryComponent,
    VenueHireComponent,
    ShopComponent,
    ExhibitionListComponent,
    ArtistComponent,
    AboutComponent,

    ExhibitionDetailsComponent,
    CarouselHolderComponent,
    SearchBarComponent,
    FooterComponent,
    CategoryComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LaunchAdminComponent,
    SidebarComponent,
    EventComponent,
    EventGalleryComponent,
    ShopManagerComponent,
    VenueManagerComponent,
    UserManagerComponent,
    MainWebsiteComponent,
    VenueComponent,
    EventlistComponent,
    InfoComponent,
    CartComponent
    //SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ServicesModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SwiperModule,
    // ComponentModule
  ],
  providers: [ 
    TopNavBarService,
    FooterService,
    CategoryService,
    EventService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
