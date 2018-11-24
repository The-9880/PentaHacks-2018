import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RMViewComponent } from './rm-view/rm-view.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';
import { RMCAComponent } from './rm-ca/rm-ca.component';
import { AccountHeaderComponent } from './account-header/account-header.component';
import { RMCMComponent } from './rm-cm/rm-cm.component';
import { TrainingComponent } from './training/training.component';
import { ProductsComponent } from './products/products.component';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RMViewComponent,
    ClientViewComponent,
    AccountSidebarComponent,
    RMCAComponent,
    AccountHeaderComponent,
    RMCMComponent,
    TrainingComponent,
    ProductsComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
