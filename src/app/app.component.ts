import { Component, OnInit } from '@angular/core';
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
  }
}


