import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dynamicHTML: string = 'this will conflict';

  ngOnInit() {
    this.buildHTML();
  }

  buildHTML() {
    const isEmployee = true;

    if (isEmployee) {
      this.dynamicHTML = '<h1>You are an employee!</h1>';
    } else {
      this.dynamicHTML = '<h1>You are not employed here...</h1>';
    }
  }
}


