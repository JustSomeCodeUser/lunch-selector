import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from "../restaurant.service";
import {Restaurant} from "../interfaces/restaurant.interface";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-random-restaurant',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule],
  templateUrl: './random-restaurant.component.html',
  styleUrls: ['./random-restaurant.component.css']
})
export class RandomRestaurantComponent {
  selectedRestaurant: Restaurant | null = null;

  constructor(private restaurantService: RestaurantService) {}

  getRandomRestaurant() {
    this.restaurantService.getRandomRestaurant().subscribe(
      (data: Restaurant) => {
        this.selectedRestaurant = data;
      },
      error => {
        console.error('Error fetching random restaurant:', error);
        this.selectedRestaurant = null;
      }
    );
  }
}
