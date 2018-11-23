import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() loginAs:string; // Describe what entity type is trying to log in - client or RM

  private username:string;
  private password:string;

  constructor() { }

  ngOnInit() {
  }

  signIn()
  {
    alert(this.loginAs);
  }

}
