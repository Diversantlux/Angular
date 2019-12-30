import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../../categories.service';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {
  // categoriesPage = {
  //   // tslint:disable-next-line:max-line-length
  //   1: [{name: 'Телевизоры', id: '1', img: 'https://static.goods.ru/medias/images/1573/100023015530b0.jpg', description: 'Телевизоры это крутая штука, нажми на кнопку чтобы посмотреть весь список',
  //     button: 'Посмотреть все телеки'}],
  // };

  constructor(private activatedRoute: ActivatedRoute, private categoriesService: CategoriesService) {
  }

  category = this.categoriesService.categories[this.activatedRoute.snapshot.params.categoryId];
}
