import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoginSessionService } from '../login-session.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  constructor(private sessionService : LoginSessionService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit() {
    if(this.sessionService.getAccountType() != 'Client')
      this.location.back();

    this.accountID = +this.sessionService.getAccountID();
    this.authenticated = this.sessionService.isAuthenticated() as boolean;

    if(+this.accountID != +this.route.snapshot.paramMap.get('id')){
      this.location.back(); 
    
  }
  }

}
