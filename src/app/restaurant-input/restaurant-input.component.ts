import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {FormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-restaurant-input',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    // This is where HttpClientModule should be imported
  ],
  templateUrl: './restaurant-input.component.html',
  styleUrls: ['./restaurant-input.component.css']
})
export class RestaurantInputComponent {
  restaurantName: string = ''; // This will hold the restaurant name entered by the user

  constructor(private restaurantService: RestaurantService) {}

  submitRestaurant() {
    if (this.restaurantName) {
      this.restaurantService.submitRestaurant(this.restaurantName).subscribe(
        response => {
          // Handle response here if needed
          console.log('Restaurant submitted successfully');
        },
        error => {
          // Handle error here
          console.error('There was an error submitting the restaurant', error);
        }
      );
      this.restaurantName = ''; // Reset the input field after submission
    } else {
      // Maybe show an error message to the user that the input is empty
      console.error('Restaurant name is empty');
    }
  }
}
