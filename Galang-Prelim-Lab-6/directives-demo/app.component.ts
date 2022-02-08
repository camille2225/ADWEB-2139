import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'directives-Demo';
  logInName = 'admin';
  isLogIn:boolean = false;
  isLogOut:boolean = true;

  list = [1, 2, 3, 4, 5];

  studentArr: any[] = [
  {
    "id":1,
    "name":"Camille"
  },
  {
    "id":2,
    "name":"clariz"
  },
  {
    "id":3,
    "name":"Maricel"
  },
  {
    "id":4,
    "name":"ellimac"
  }
  ]
  trackByData(index:number, studentArr:any): number
  {
    return studentArr.id;
  }
  
     //ngFor Statement (Angular - Display a list items)
     emp = [
      { firstname: "Camille", lastname: "Galang", email: "camsy@yahoo.com", role: "UI DESIGNER"},
      { firstname: "Clariz", lastname: "lopez", email: "lopez89@gmial.com", role: "SEO"},
      { firstname: "Maricel", lastname: "Aquino", email: "Maraqui22@gmail.com", role: "MANAGER"},
    ];

  
  
  }
