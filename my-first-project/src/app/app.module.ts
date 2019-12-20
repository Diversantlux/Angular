import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { CategoryListPageComponent } from './category/category-list-page/category-list-page.component';
import { CategoryPageComponent } from './category/category-page/category-page.component';
import { ProductsListPageComponent } from './products/products-list-page/products-list-page.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryListPageComponent,
    CategoryPageComponent,
    ProductsListPageComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
