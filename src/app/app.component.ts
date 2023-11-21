import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {RestaurantInputComponent} from "./restaurant-input/restaurant-input.component";
import {RandomRestaurantComponent} from "./random-restaurant/random-restaurant.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RestaurantInputComponent, RandomRestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lunch-selector';
}
