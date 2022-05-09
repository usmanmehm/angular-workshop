import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  // listOfPeople = [
  //   { id: 0, name: 'Jack', isEmployee: false},
  //   { id: 1, name: 'Jill', isEmployee: false},
  //   { id: 2, name: 'Mary', isEmployee: false},
  //   { id: 3, name: 'John', isEmployee: true},
  //   { id: 4, name: 'Jacqueline', isEmployee: true}
  // ];

  constructor(private http: HttpClient) { }

  getListOfPeople() {
    this.http.get('/assets/mock-data.json').subscribe(res => {
      console.log(res);
    })
  }
}

