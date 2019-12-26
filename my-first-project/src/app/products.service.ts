import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = {
    1: [{name: 'Product 1', id: '10', description: 'Здесь должен быть конкретный Телевизор', img: ''}],
    2: [{name: 'Product 2', id: '20', description: 'Здесь должен быть конкретный Телефон', img: ''}]
  }
  constructor() { }
}
