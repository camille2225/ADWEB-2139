import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http:HttpClient) { }

    getUsersfromServer () {
      return this.http.get('https://jsonplaceholder.typicode.com/users'); //JSON FILE
    }

    getLimitUsersfromServer () {
      return this.http.get('https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5%27'); //JSON FILE
    }
}