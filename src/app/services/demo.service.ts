import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private weather: any;
  constructor(private http: HttpClient) {}

  getWeather(): Observable<WeatherResponse> {
    return this.http.get('/assets/mock-data.json') as Observable<WeatherResponse>;
  }

  setWeather(data: any) {
    this.weather = data;
  }
}























// constructor(private http: HttpClient) { }

// getListOfPeople() {
//   return this.listOfPeople;
// }

// retrieveListOfPeople() {
//   return this.http.get('/assets/mock-data.json');
// }