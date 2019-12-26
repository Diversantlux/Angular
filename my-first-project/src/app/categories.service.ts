import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories = {
   1: [{name: 'Телевизоры', id: '1', img: 'https://static.goods.ru/medias/images/1573/100023015530b0.jpg', description: 'Телевизоры'}],
   2: [{name: 'Телефоны', id: '2', img: 'https://akket.com/wp-content/uploads/2018/04/Huawei-22.jpg', description: 'Телевизоры'}],
    // tslint:disable-next-line:max-line-length
   3: [{name: 'Ноутбуки', id: '3', img: 'https://vysteh.com/wp-content/uploads/2019/05/17682050644c030095dd188f339090b7.jpeg', description: 'Телевизоры'}]
  };
  constructor() { }
}
