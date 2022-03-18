import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Emplist1Component } from './emplist1/emplist1.component';
import { Emplist2Component } from './emplist2/emplist2.component';
import { Emplist3Component } from './emplist3/emplist3.component';

const routes: Routes = [{path: 'elist1', component:Emplist1Component},
                        {path: 'elist2', component:Emplist2Component},
                        {path: 'elist3', component:Emplist3Component},
                        {path: '', component:Emplist1Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
