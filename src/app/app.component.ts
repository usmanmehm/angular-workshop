import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dynamicHTML: string = '';
  dataArr = [
    { id: 0, name: 'Mousumi', isEmployee: false},
    { id: 1, name: 'Savita', isEmployee: false},
    { id: 2, name: 'Obaid', isEmployee: false},
    { id: 3, name: 'John', isEmployee: true},
    { id: 4, name: 'Jacqueline', isEmployee: true}
  ];

  isRed = true;

  items = [{ name: 1}];

  isEmployee = false;

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

  myFunction(event: KeyboardEvent) {
    console.log(event.key)
  }

  onClick() {
    console.log('element was clicked!');
  }
}


