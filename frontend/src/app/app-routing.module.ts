import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RMViewComponent } from './rm-view/rm-view.component';

const routes : Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'RM/:id', component: RMViewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
