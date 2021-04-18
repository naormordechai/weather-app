import { Component, Input, OnInit } from '@angular/core';
import { ICity } from 'src/app/models/city.model';

@Component({
  selector: 'app-weather-row',
  templateUrl: './weather-row.component.html',
  styleUrls: ['./weather-row.component.scss']
})
export class WeatherRowComponent implements OnInit {

  @Input() city: ICity;

  constructor() { }

  ngOnInit(): void {
  }

}
