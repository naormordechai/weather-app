import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherResponse } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '0d7303c17ee3d3482cd82a2ad273a90d';
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<IWeatherResponse> {
    return this.http.get<IWeatherResponse>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);
  }
}
