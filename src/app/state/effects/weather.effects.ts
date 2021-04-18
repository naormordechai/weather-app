import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ICity } from 'src/app/models/city.model';
import { WeatherService } from 'src/app/services/weather.service';
import * as weatherActions from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private weatherService: WeatherService) { }
    @Effect()
    getWeather$ = this.actions$.pipe(
        ofType(weatherActions.WEATHER_START),
        switchMap((action: weatherActions.WeatherStart) => {
            return this.weatherService.getWeather(action.payload).pipe(
                map(resData => {
                    const city: ICity = {
                        name: resData.name,
                        celsius: resData.main.temp,
                        description: resData.weather[0].description
                    };
                    return new weatherActions.GetWeatherSuccess(city);
                })
            );
        }),
    );
}
