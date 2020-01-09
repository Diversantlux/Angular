import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../products.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  productId = this.ac.snapshot.params.productId;
  categoryId = this.ac.snapshot.params.categoryId;
  product = this.productsService.products[this.categoryId].find(({id}) => {
   return  this.productId === id;
  });
  constructor(private productsService: ProductsService, private ac: ActivatedRoute) { }

}
