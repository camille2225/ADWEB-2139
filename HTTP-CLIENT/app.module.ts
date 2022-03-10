import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

import { MyserviceService } from './myservice.service'; //ADDING THE SERVICE 

import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpclientService } from './httpclient.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    ContactComponent,
    PagenotfoundComponent,
    NewCmpComponent,
    HttpclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService,  HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
