import { createSelector } from '@ngrx/store';
import * as fromCities from './reducers/cities.reducer';

export interface AppState {
    cities: fromCities.State;
}

export const citiesState = (state: AppState) => state.cities;

export const allCities = createSelector(citiesState, (citiesReducer) => citiesReducer.cities);

export const isLoadingWeather = createSelector(citiesState, (citiesReducer) => citiesReducer.isLoading);
