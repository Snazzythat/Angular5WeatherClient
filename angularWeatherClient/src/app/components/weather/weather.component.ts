import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

// Weather component class
export class WeatherComponent implements OnInit {

  numericalvalue: number;
  isCelsius: boolean;
  isFahrenheit: boolean;

  additionalInfo:AdditionalInfo;

  constructor() {
    this.numericalvalue = 0;
    this.isCelsius = true;
    this.isFahrenheit = false;
    this.additionalInfo = {
      windSpeed: '--',
      pressure: '--',
      humidity: '--',
      feelsLike: '--'
    }
   }

  ngOnInit() {
  }

}

// Additional info for weather viewer
interface AdditionalInfo {
  windSpeed: string,
  pressure: string,
  humidity: string,
  feelsLike: string
}
