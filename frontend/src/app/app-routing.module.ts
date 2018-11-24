import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RMViewComponent } from './rm-view/rm-view.component';
import { RMCAComponent } from './rm-ca/rm-ca.component';
import { RMCMComponent } from './rm-cm/rm-cm.component';
import { TrainingComponent } from './training/training.component';
import { ProductsComponent } from './products/products.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { MyAccountComponent } from './my-account/my-account.component';

const routes : Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'RM/:id', component: RMViewComponent,
  children: [
    {path: '', redirectTo: 'client-acquisition', pathMatch:'full'},
    {path: 'client-acquisition', component: RMCAComponent},
    {path: 'client-management', component: RMCMComponent},
    {path: 'skillset-training', component: TrainingComponent},
    {path: 'products-pool', component: ProductsComponent}
  ]},
  {path:'Client/:id', component: ClientViewComponent,
    children: [
      {path:'personal-information', component:MyAccountComponent}
      ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
