import { CeakOutComponent } from './ceak-out/ceak-out.component';
import { ProdectDetailsComponent } from './prodect-details/prodect-details.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'register', pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'categories',canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'allorders',canActivate:[AuthGuard],component:OrdersComponent},
  {path:'allbrand',canActivate:[AuthGuard],component:BrandsComponent},
  {path:'cart',canActivate:[AuthGuard],component:CartComponent},
  {path:'prodectDetails/:id',canActivate:[AuthGuard],component:ProdectDetailsComponent},
  {path:'cutDetails/:id',canActivate:[AuthGuard],component:CatDetailsComponent},
  {path:'ceakOut/:id',canActivate:[AuthGuard],component:CeakOutComponent},
  {path:'wishList',canActivate:[AuthGuard],component:WishListComponent},
  {path:'logIn',component:LoginComponent},
  {path:'logOut',component:LogOutComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
