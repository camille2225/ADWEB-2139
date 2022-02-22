import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:'about', component:AboutComponent},
                        {path:'skills', component:SkillsComponent},
                        {path:'portfolio', component:PortfolioComponent},
                        {path:'contact', component:ContactComponent},
                        {path:'**', component:PagenotfoundComponent}];  //Wildcard to match any 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }