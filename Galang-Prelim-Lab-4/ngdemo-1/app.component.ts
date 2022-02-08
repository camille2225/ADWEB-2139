import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //String binding
  Intro = "Hello, My name is Camille Galang!";

  //Property Binding
  MyName:string = 'Camille Galang';

  //Style Binding
  color = "purple";

  //class Binding
  appliedCSSClass = "green";
  notappliedCSSClass = false;

  getData(data: any) {
    console.warn(data);
    }
    showData ($event: any){
    console.log("button is clicked" ); if($event) {
    console.log($event.target);
    console.log($event.target.value); }
   }
   }
    
  
