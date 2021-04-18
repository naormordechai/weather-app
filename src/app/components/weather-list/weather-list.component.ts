import { Component, Input, OnInit } from '@angular/core';
import { ICity } from 'src/app/models/city.model';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  @Input() cities: ICity[];
  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
