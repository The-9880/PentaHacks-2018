import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoginSessionService } from '../login-session.service';

@Component({
  selector: 'app-rm-view',
  templateUrl: './rm-view.component.html',
  styleUrls: ['./rm-view.component.css']
})
export class RMViewComponent implements OnInit {

  accountID : number;
  authenticated : boolean;

  constructor(private sessionService : LoginSessionService, private route:ActivatedRoute, private location:Location) { }

  ngOnInit() {
    if(this.sessionService.getAccountType() != 'RM')
      this.location.back();

    this.accountID = +this.sessionService.getAccountID();
    this.authenticated = this.sessionService.isAuthenticated() as boolean;

    if(+this.accountID != +this.route.snapshot.paramMap.get('id')){
      this.location.back(); // prevent a logged-in RM from accessing another RM's view.
    }
  }

}
