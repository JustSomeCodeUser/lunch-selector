import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestaurantService} from "../restaurant.service";

@Component({
  selector: 'app-random-restaurant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-restaurant.component.html',
  styleUrl: './random-restaurant.component.css'
})
export class RandomRestaurantComponent {
  selectedRestaurant: string | null = null;

  constructor(private restaurantService: RestaurantService) {}

  getRandomRestaurant() {
    this.restaurantService.getRandomRestaurant().subscribe(
      (data: Object) => {
        this.selectedRestaurant = data as string;
      }
    );
  }
}
