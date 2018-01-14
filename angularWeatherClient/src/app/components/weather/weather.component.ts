import { Component, OnInit } from '@angular/core';
// We are using service as injectable. Hence need to inject this service into the constructor!
import { WeatherService } from '../../services/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

// Weather component class
export class WeatherComponent implements OnInit {

  city: string;
  numericalvalue: string;
  isCelsius: boolean;
  isFahrenheit: boolean;
  additionalInfo:AdditionalInfo;

  //Class constructor
  //WeatherService is injected into the constructor
  //This will allow the current class to use all the fucntions from the WeatherService service
  constructor(private meteoService:WeatherService) {
    
    this.numericalvalue = '--';
    this.isCelsius = true;
    this.isFahrenheit = false;
    this.additionalInfo = {
      windSpeed: '--',
      pressure: '--',
      humidity: '--',
      feelsLike: '--'
    }
    this.city = '--';
   }

  //Uses weather service with HTTP client calling the Dark Sky api to get the weather info
  getWeather(){
    console.log('City chosen: ' + this.city)
  }

  //Uses location service with HTTP client calling the Gogole api to get the weather info
  getLocation(){

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
