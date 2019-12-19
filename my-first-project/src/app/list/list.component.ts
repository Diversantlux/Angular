import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  filter(query) {
    let result = [];
    if (query.length > 0) {
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i];
        const name = product.name;
        if (name.toLowerCase().indexOf(query) > -1) {
          result.push(product);
        }

      }
    } else {
      result = products;
    }
    this.products = result;
  }

//сортировка(P.s кнопки еще нет)
//   const foo = function(products) {
//
//     let result = products.slice(0, products.lenght);
//
//     for (var i = 0, endI = result.length -1; i < endI; i++) {
//       for (var j = 0, endJ = endI - i; j < endJ; j++ ) {
//         if (result[j].price > result[j +1].price) {
//           const swap = result[j];
//           result[j] = result[j +1];
//           result[j +1] = swap;
//
//         }
//       }
//     }
//     return result;
//   }
//   foo(products);

  constructor() { }

  ngOnInit() {
  }

}
