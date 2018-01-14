import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { LocationComponent } from './components/location/location.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
