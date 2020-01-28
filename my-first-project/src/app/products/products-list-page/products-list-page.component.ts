import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent {
  categoryId = this.ac.snapshot.params.categoryId;
  products = this.productsService.products[this.categoryId];
  aaa() { this.productsService.sort(this.categoryId, 'description');
  this.products = this.productsService.sort(this.categoryId, 'description');

   //this.products = ; мне надо - результат который вернет функция sort в this.proucts
  }
  constructor(private productsService: ProductsService, private ac: ActivatedRoute) { }




  // products = products;
  // filter(query) {
  //   let result = [];
  //   if (query.length > 0) {
  //     for (let i = 0; i < this.products.length; i++) {
  //       const product = this.products[i];
  //       const name = product.name;
  //       if (name.toLowerCase().indexOf(query) > -1) {
  //         result.push(product);
  //       }
  //
  //     }
  //   } else {
  //     result = this.products;
  //   }
  //   this.products = result;
  // }



}
