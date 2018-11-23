import { Component, OnInit, Input } from '@angular/core';
import { LoginSessionService } from '../login-session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() loginAs:string; // Describe what entity type is trying to log in - client or RM

  private username:string;
  private password:string;

  constructor(private loginSession : LoginSessionService) { }

  ngOnInit() {
  }

  signIn()
  {
    this.loginSession.authenticate(this.username, this.password, this.loginAs);
  }

}
