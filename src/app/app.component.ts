import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherService } from './services/weather.service';
import { List, WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  weatherData?:WeatherData;
  cityName:string='Athens';

  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next:(responce)=>{
        this.weatherData=responce;
        //this.list=this.weatherData.list;
        console.log(this.weatherData.list[0].main.temp);
      }
    });
  }
  
}
