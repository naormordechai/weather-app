import { Action } from '@ngrx/store';
import { ICity } from 'src/app/models/city.model';
import { IWeatherResponse } from 'src/app/models/weather.model';

export const WEATHER_START = '[WEATHER] wether start';
export const WEATHER_SUCCESS = '[WEATHER] wether success';

export class WeatherStart implements Action {
    readonly type = WEATHER_START;
    constructor(public payload: string) { }
}

export class GetWeatherSuccess implements Action {
    readonly type = WEATHER_SUCCESS;
    constructor(public payload: ICity) { }
}

export type weatherActions = WeatherStart | GetWeatherSuccess;
