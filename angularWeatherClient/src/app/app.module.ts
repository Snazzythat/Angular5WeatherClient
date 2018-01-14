import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { LocationComponent } from './components/location/location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WeatherService } from './services/weather-service.service'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LocationComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [WeatherService],

  bootstrap: [AppComponent]
})
export class AppModule { }
