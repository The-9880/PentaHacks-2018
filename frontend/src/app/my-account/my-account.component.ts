import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

import { BackendService } from '../backend.service';
import { LoginSessionService } from '../login-session.service';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  private thisCustomer : Customer;

  constructor(private backend : BackendService, private session: LoginSessionService) { }

  ngOnInit() {

    this.backend.getCustomer(this.session.getAccountID()).subscribe(data => this.thisCustomer = data);

  }

}
