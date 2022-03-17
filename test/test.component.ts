import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   // DatePipe
   presentDate = new Date();

   
  // AsynxPipe
  time = new Observable<string> ((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  // CurrencyPipe
  price : number = 30000;

  //SlicePipe
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

   // DeicmalPipe
   decimalNum1: number = 8.7589623;
   decimalNum2: number = 5.43;

   //JsonPipe
   object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  constructor() { }

  ngOnInit(): void {
  }

}
