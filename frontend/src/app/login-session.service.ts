import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginSessionService {

  private accounts = [
    [ ['TrueRM', 'secure'], 'RM'],
    [ ['LoyalClient', 'password'], 'Client']
  ];

  private accountType : string;
  private authenticated : boolean = false;

  constructor() { }

  authenticate(user:string, pw:string, type:string) : void
  {
    this.accounts.forEach((account) => {
      if(account[0][0] == user && account[0][1] == pw && account[1] ==type)
      {
        // is authenticated.
        this.authenticated = true;
        this.accountType = account[1] as string;
      }
    });
  }
}
