import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = {
    1: [{
      name: 'Телек 1',
      id: '10',
      description: 'Телевизор Samsung 4k 65 display QLED ',
      price: 200000,
      img: 'https://im0-tub-ru.yandex.net/i?id=584b635be5debfdb8f47ba6965c94b74&n=13'
    },
      {
        name: 'Телек 2',
        id: '11',
        description: 'Телевизор LG 4k 65 display OLED',
        price: 2500000,
        img: 'https://www.electronicempire.co.uk/images/u_10180149.jpg'
      },
      {
        name: 'Телек 3',
        id: '12',
        description: 'Телевизор Samsung 4k 77 display ',
        price: 150000,
        img: 'https://im0-tub-ru.yandex.net/i?id=8e55e9c0c8bc98619e4a90e9b4897752&n=13'
      },
      {
        name: 'Телек 4',
        id: '13',
        description: 'Телевизор LG 4k 65 display OLED 77 ',
        price: 300000,
        img: 'https://www.technocity.ru/upload/iblock/56c/z0000127782-01.jpg'
      }],
    2: [{
      name: 'Телефон 1',
      id: '20',
      description: 'Смартфон  Samsung Galaxy S10',
      img: 'https://versiya.info/uploads/posts/2019-02/1550912825_samsung-galaxy-s10-2-15.jpg'
    },
      {
        name: 'Телефон 2',
        id: '21',
        description: 'Смартфон  Iphone 11',
        img: 'https://static.tildacdn.com/tild3933-6434-4531-b438-373266333666/1.jpg'
      },
      {
        name: 'Телефон 3',
        id: '22',
        description: 'Смартфон  Huawei P30 Pro',
        img: 'https://static.tildacdn.com/tild3236-3139-4430-a431-323633393930/Huawei-P30-Pro-Smart.jpg'
      },
      {
        name: 'Телефон 4',
        id: '23',
        description: 'Смартфон Iphone 11 Pro',
        img: 'https://avatars.mds.yandex.net/get-zen_doc/1554513/pub_5d910f56a3f6e400ade502fa_5d9110d72fda8600af850fc0/scale_1200'
      }],
    3: [{
      name: 'Ноутбук 1',
      id: '30',
      description: 'Ноутбук ACER Aspire V5',
      img: 'http://3.bp.blogspot.com/-6BNAB-ZCOgg/UetE3yy3BPI/AAAAAAAACnE/ppYCuYB5B_o/s1600/Acer+Aspire+V5-572PG_drivers.jpg'
    },
      {
        name: 'Ноутбук 2',
        id: '31',
        description: 'Ноутбук MacBook Pro',
        img: 'https://mspc2.gvozdb.ru/assets/images/products/22/apple-macbook-pro-flexgate.jpg'
      },
      {
        name: 'Ноутбук 3',
        id: '32',
        description: 'Ноутбук Macbook',
        img: 'https://the-geek.ru/wp-content/uploads/2018/08/macbook.jpg'
      },
      {
        name: 'Ноутбук 4',
        id: '33',
        description: 'Мощный Игровой Ноутбук OMEN',
        img: 'http://www.sagmart.com/uploads/2017/08/23/news_image1/hp-omen-x-front.jpg'
      }]
  }

  constructor() {
  }
}
