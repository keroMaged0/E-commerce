import { LoaderInterceptor } from './loader.interceptor';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { RegisterComponent } from './register/register.component';
import { BrandsComponent } from './brands/brands.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';
import { ProdectDetailsComponent } from './prodect-details/prodect-details.component';
import { CeakOutComponent } from './ceak-out/ceak-out.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { provideToastr } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import {  CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CategoriesComponent,
    OrdersComponent,
    LoginComponent,
    LogOutComponent,
    RegisterComponent,
    BrandsComponent,
    CartComponent,
    WishListComponent,
    MainSliderComponent,
    SearchPipe,
    ProdectDetailsComponent,
    CeakOutComponent,
    CatDetailsComponent,
    LoaderComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        positionClass: 'toast-top-center',
        preventDuplicates: true,
        progressAnimation:'increasing',
        progressBar:true
      }
    ),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    NgxImageZoomModule ,
    

    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoaderInterceptor,
      multi:true
    },
    provideAnimations(), // required animations providers
    provideToastr(), 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
