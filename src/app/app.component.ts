import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICity } from './models/city.model';
import * as fromRoot from './state/index';
import * as weatherActions from './state/actions/weather.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities$: Observable<ICity[]>;
  isLoading$: Observable<boolean>;
  cityForm: FormGroup;
  citiesToSelect = ['Tel Aviv', 'Berlin', 'Barcelona'];

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildCityForm();
    this.cities$ = this.store.select(fromRoot.allCities);
    this.isLoading$ = this.store.select(fromRoot.isLoadingWeather);
  }

  onSearchWeather(city: string): void {
    this.store.dispatch({ type: weatherActions.WEATHER_START, payload: city });
    this.cityForm.reset();
  }

  buildCityForm(): void {
    this.cityForm = this.fb.group({
      city: [null, Validators.required]
    });
  }

}
