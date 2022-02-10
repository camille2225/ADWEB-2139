import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Binding Images
  imageUrl:string = 'assets/img/home.jpg';
  image1:string = 'assets/img/france.jpg';
  image2:string = 'assets/img/seol.jpg';
  image3:string = 'assets/img/san.jpg';
  image4:string = 'assets/img/boston.jpg';

  //String Interpolation 
  bordertext = 'Research Conferences';
  bordertext1= 'Join our online events this 2021!';

  //String Interpolation/One way data binding
  titlemain="Join our Research Conferences around the Globe!";

  //String Interpolation - country
  country1='France';
  country2='Seoul';
  country3='San Francisco';
  country4='Boston';

  //style Binding
  link='blue';

  constructor() { }

  ngOnInit(): void {
  }

}
