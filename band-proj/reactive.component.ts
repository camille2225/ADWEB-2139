import { Component, OnInit } from '@angular/core';
import { of, from, range, filter, map, fromEvent, interval, take, scan, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  //Variables for using of, from, range
  numbers: number[]=[];
  sum: number=0;

  //Using filter operator
  filteredNumbers : number[] = [];
  sumfiltered: number=0;

  //using map operator
  mapsum: number=0;
  mappedNumbers : number[] = [];

  //using Ajax
  apiMessage: any;

  //fromEvent
  counter: number=0;

  ngOnInit(): void {
    
    //const numbers$ = of (1, 2, 3, 4, 5, 6, 7, 8, 9, 10); => Using OF

    //const numbers$ = range (1, 10); => Using Range

    //using From
    const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    //observer 
    const observer= {
      next: (num: number) => {this.numbers.push(num); this.sum += num},
      error: (err: any) => console.log(err),
      complete: () => console.log("Observation completed!")
      
    };

    //Subscribe
    numbers$.subscribe(observer);

    //using the filter operation
    const filterFn = filter( (num : number) => num > 5);
    const filteredNumbers$ = filterFn(numbers$);

    //sub to filter
    filteredNumbers$.subscribe( (num : number) => {
    this.filteredNumbers.push(num); this.sumfiltered += num } );
  
    //using the map operation
    const mapFnc = map( (num : number) => num + num);
    const mappedNumbers$ = numbers$.pipe(filterFn, mapFnc);
    
    //subs to map
    mappedNumbers$.subscribe( (num : number) => {
    this.mappedNumbers.push(num); this.mapsum += num } );
  
    //using Ajax
    const api$ = ajax ({
      url: "https://httpbin.org/delay/1",
      method: 'POST',
      headers: {'Content-Type': 'application/text' },
      body: "Welcome! My name is Camille Galang from WD - 302"
    });

    //sub to api
    api$.subscribe(res => this.apiMessage = res.request.body);
  
    //using fromEvent
    const clickEvent$ = fromEvent(document, 'click');
    
    //sub to fromEvent
    clickEvent$.subscribe( () => this.counter++ );
  
    //ON YOUR OWN
    //const interval$ = interval(1000);
    
    //sub to interval
    //interval$.subscribe(val => console.log('stream 1' + val));

    //const click$ = fromEvent(document, 'click');

    //sub to click
   // click$.subscribe(evt => console.log('Mouse Clicked' + evt));

   //One more Observable
   //const obs = interval(500).pipe(take(5));

   //var scanObs = obs.pipe(
   //scan((state, value) => state + value , 0)
   //);

   //scanObs.subscribe(total => console.log(total));

   //Req #2
   const observable = new Observable (subscriber => {
     subscriber.next(1);
     subscriber.next(2);
     subscriber.next(3);
     setTimeout( () => {
       subscriber.next(4);
       subscriber.complete(); }, 1000);
     });

   
     //subscribe
     console.log('just before subscribe');
     observable.subscribe({
       next(x) {console.log('got value' + x); },
       complete() { console.log('done'); }
       
     });
     console.log('just after subscribe');
  };

}
