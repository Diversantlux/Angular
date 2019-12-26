import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../categories.service';

@Component({
  selector: 'app-category-list-page',
  templateUrl: './category-list-page.component.html',
  styleUrls: ['./category-list-page.component.scss']
})
export class CategoryListPageComponent {

  constructor(private categoriesService: CategoriesService) { }
  categories = this.categoriesService.categories;
}
