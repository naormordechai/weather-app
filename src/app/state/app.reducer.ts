import { ActionReducerMap } from '@ngrx/store';
import * as fromCities from './reducers/cities.reducer';

export interface AppState {
    cities: fromCities.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    cities: fromCities.citiesReducer
};

