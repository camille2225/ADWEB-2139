import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  serviceproperty = " The Service is Created";
  constructor() { }
  showTodayDate () {
    let ndate = new Date();  //THIS IS THE DATE
    return ndate;
  }
  
}