import { Component, OnInit } from '@angular/core';

import { LoginSessionService } from '../login-session.service';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent implements OnInit {

  constructor(private loginSession : LoginSessionService) { }

  ngOnInit() {
  }

  signOut()
  {
    this.loginSession.logout();
  }

}
