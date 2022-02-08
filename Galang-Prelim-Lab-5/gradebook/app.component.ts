import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = "gradebook";

  StudName = "";
  Subj = "";
  prelim = 0;
  mid = 0;
  final = 0;
}
