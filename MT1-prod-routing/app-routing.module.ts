import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{path:'about', component:AboutComponent},
                        {path:'products', component:ProductsComponent},
                        {path:'home', component:HomeComponent},
                        {path:'products-details', component:ProductsDetailsComponent},
                        {path:'contact', component:ContactComponent},
                        {path:'', component:HomeComponent},
                        {path:'**', component:PagenotfoundComponent}]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
