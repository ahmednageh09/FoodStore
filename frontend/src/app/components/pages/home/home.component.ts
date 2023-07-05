import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foodService.getAllFoodBySearchTerm(params.searchTerm).subscribe((serverFoods) => {
          this.foods = serverFoods;
        });
      } else if (params.tag) {
        this.foodService.getAllFoodByTag(params.tag).subscribe((serverFoods) => {
          this.foods = serverFoods;
        });
      } else {
        this.foodService.getAll().subscribe((serverFoods) => {
          this.foods = serverFoods;
        });
      }
    });
  }
}
