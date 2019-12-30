import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = {
    1: [{name: 'Product 1', id: '10', description: 'Телевизор Samsung 4k 65 display QLED ', img: 'https://im0-tub-ru.yandex.net/i?id=584b635be5debfdb8f47ba6965c94b74&n=13'},
      {name: 'Product 1', id: '10', description: 'Телевизор LG 4k 65 display OLED', img: 'https://www.electronicempire.co.uk/images/u_10180149.jpg'},
      {name: 'Product 1', id: '10', description: 'Телевизор Samsung 4k 77 display ', img: 'https://im0-tub-ru.yandex.net/i?id=8e55e9c0c8bc98619e4a90e9b4897752&n=13'},
      {name: 'Product 1', id: '10', description: 'Телевизор LG 4k 65 display OLED 77 ', img: 'https://www.technocity.ru/upload/iblock/56c/z0000127782-01.jpg'}],
    2: [{name: 'Product 2', id: '20', description: 'Здесь должен быть конкретный Телефон', img: ''}],
    3: [{name: 'Product 3', id: '20', description: 'Здесь должен быть конкретный Телефон', img: ''}]
  }
  constructor() { }
}
