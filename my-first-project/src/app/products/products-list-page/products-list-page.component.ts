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

}
