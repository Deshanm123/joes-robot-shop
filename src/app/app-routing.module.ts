import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
//CommonModule provides common directives like ngIf and ngFor. It is not required here but might be included in other parts of the app.
// import { CommonModule } from '@angular/common';

const routes : Routes = [
  { path:'home' , component : HomeComponent , title :"Home - Joe's Robot Shop" },
  { path: 'catalog', component : CatalogComponent , title:"Catalog - Joe's Robot Shop"  },
  { path : 'cart' ,component :CartComponent , title:"Cart - Joe's Robot Shop" },
  { path : '', redirectTo:'/home' , pathMatch : 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  //The configured router module at the root level of the application.
  // routes is passed as an argument to forRoot, which means the app’s routing configuration is defined by the routes array
})
export class AppRoutingModule { }