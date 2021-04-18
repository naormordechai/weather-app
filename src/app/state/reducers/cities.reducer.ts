import { ICity } from '../../models/city.model';
import * as weatherActions from '../actions/weather.actions';

export interface State {
    cities: ICity[];
    isLoading: boolean;
}

const initialState: State = {
    cities: [],
    isLoading: false
};

export const citiesReducer = (state = initialState, action: weatherActions.weatherActions) => {
    switch (action.type) {
        case weatherActions.WEATHER_START:
            return {
                ...state,
                isLoading: true
            };
        case weatherActions.WEATHER_SUCCESS:
            return {
                ...state,
                cities: state.cities.concat(action.payload),
                isLoading: false
            };
        default:
            return state;
    }
};
