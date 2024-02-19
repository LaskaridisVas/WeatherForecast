import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {WeatherData} from '../models/weather.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiBaseURL:string='https://api.openweathermap.org/data/2.5/forecast';
  apiKey:string='01f9aada8314feb90c464117e5bbff2f'; 
  // headerName:string='';
  // headerValue:string='';

  constructor(private httpClient:HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>{
    return this.httpClient.get<WeatherData>(this.apiBaseURL,{
      params:new HttpParams()
      .set('q',cityName)
      .set('appid', this.apiKey)
      .set('units','metric')
    })
  }
}
