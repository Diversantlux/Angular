import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryListPageComponent } from './categories/category-list-page/category-list-page.component';
import { CategoryPageComponent } from './categories/category-page/category-page.component';
import { ProductsListPageComponent } from './products/products-list-page/products-list-page.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryListPageComponent,
    CategoryPageComponent,
    ProductsListPageComponent,
    ProductsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'categories', pathMatch: 'full'},
      { path: 'categories', component: CategoryListPageComponent },
      { path: 'categories/:categoryId', component: CategoryPageComponent },
      { path: 'categories/:categoryId/products', component: ProductsListPageComponent },
      { path: 'categories/:categoryId/products/:productId', component: ProductsPageComponent}] )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
