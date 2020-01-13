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
  constructor(private productsService: ProductsService, private ac: ActivatedRoute) { }


  //  const foo = function(products) {
  //
  //   let result = products.slice(0, products.lenght);
  //
  //   for (var i = 0, endI = result.length -1; i < endI; i++) {
  //     for (var j = 0, endJ = endI - i; j < endJ; j++ ) {
  //       if (result[j].price > result[j +1].price) {
  //         const swap = result[j];
  //         result[j] = result[j +1];
  //         result[j +1] = swap;
  //
  //       }
  //     }
  //   }
  //   return result;
  // }
  // foo(products);

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
  //     result = products;
  //   }
  //   this.products = result;
  // }



}
