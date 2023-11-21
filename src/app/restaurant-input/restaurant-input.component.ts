import { Component } from '@angular/core';
import {RestaurantService} from "../restaurant.service";
import {FormsModule} from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {Restaurant} from "../interfaces/restaurant.interface";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-restaurant-input',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    // ... other imports
  ],
  templateUrl: './restaurant-input.component.html',
  styleUrls: ['./restaurant-input.component.css']
})
export class RestaurantInputComponent {
  restaurantData: Restaurant = {
    name: '',
    googleMapsUrl: '',
    creatorName: '',
    caption: ''
  };

  constructor(private restaurantService: RestaurantService) {}

  submitRestaurant() {
    if (this.restaurantData.name) {
      this.restaurantService.submitRestaurant(this.restaurantData).subscribe(
        response => {
          console.log('Restaurant submitted successfully');
          this.resetForm();
        },
        error => {
          console.error('There was an error submitting the restaurant', error);
        }
      );
    } else {
      console.error('Restaurant name is empty');
    }
  }

  private resetForm() {
    this.restaurantData = {
      name: '',
      googleMapsUrl: '',
      creatorName: '',
      caption: ''
    };
  }
}
