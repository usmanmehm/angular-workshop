import { Component, OnInit } from '@angular/core';
import { filter, map, take, tap } from 'rxjs';
import { DemoServiceService } from './services/demo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataArr: any = [];

  constructor(private demoService: DemoServiceService) {}

  ngOnInit() {
    this.dataArr = this.demoService.getListOfPeople();


    this.demoService.retrieveListOfPeople().pipe(

      map((res: any) => {
        const newRes = res[0];
        return newRes;
      })


    ).subscribe(res => {
      console.log(res);
    })



  }
}


