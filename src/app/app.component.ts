import { Component, OnInit } from '@angular/core';
import { filter, map, take, tap } from 'rxjs';
import { WeatherForecast, WeatherResponse } from './models/weather.interface';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todaysData: WeatherForecast | undefined;
  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.demoService.getWeather().pipe(
      map((res: WeatherResponse) => {
        return res.weather.tuesday;
      })
    ).subscribe((response: WeatherForecast) => {
      this.todaysData = response;
      console.log(this.todaysData);
      
    });
  }
}






































// dataArr: any = [];

//   constructor(private demoService: DemoServiceService) {}

//   ngOnInit() {
//     this.dataArr = this.demoService.getListOfPeople();


//     this.demoService.retrieveListOfPeople().pipe(

//       map((res: any) => {
//         const newRes = res[0];
//         return newRes;
//       })


//     ).subscribe(res => {
//       console.log(res);
//     })


//   }