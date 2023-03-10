import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusPageComponent } from './pages/contactus-page/contactus-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  {path : '' , component : HomePageComponent , pathMatch : 'full'},
  {path : 'products' , component : ProductPageComponent , pathMatch : 'full'},
  {path : 'contact' , component : ContactusPageComponent  , pathMatch : 'full'},
  {path : 'products/:id' , component : ProductPageComponent},
  {path : '**' , redirectTo : '' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
