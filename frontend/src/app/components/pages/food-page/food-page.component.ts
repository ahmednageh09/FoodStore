import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {
  food!:Food;

  constructor(activatedRoute:ActivatedRoute,
             foodService:FoodService,
             private cartService:CartService,
             private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id) {
        foodService.getFoodById(params.id).subscribe((serverFood => {
          this.food = serverFood;
        }));
      }
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl("/cart-page");
  }
}
