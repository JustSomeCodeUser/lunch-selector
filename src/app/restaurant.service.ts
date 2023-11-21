import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = '/api/choices';

  constructor(private http: HttpClient) {}

  submitRestaurant(restaurantData: { name: string; googleMapsUrl: string; creatorName: string; caption: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, restaurantData);
  }

  getAllRestaurants(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getRandomRestaurant(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random`);
  }

  updateRestaurant(id: number, updateData: { name: string; googleMapsUrl: string; creatorName: string; caption: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, updateData);
  }

  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
