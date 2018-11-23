import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginSessionService {

  private accounts = [
    [ ['TrueRM', 'secure'], 'RM', 32324],
    [ ['LoyalClient', 'password'], 'Client', 1234]
  ];

  private accountID : number;
  private accountType : string;
  private authenticated : boolean = false;

  // add a structure here holding session info to be polled.
  // and functions that components can use to query session details.

  constructor() { }

  isAuthenticated() : boolean
  {
    return this.authenticated;
  }
  getAccountID() : number
  {
    return this.accountID;
  }
  getAccountType() : string
  {
    return this.accountType;
  }

  authenticate(user:string, pw:string, type:string) : void
  {
    this.accounts.forEach((account) => {
      if(account[0][0] == user && account[0][1] == pw && account[1] ==type)
      {
        // is authenticated.
        this.authenticated = true;
        this.accountType = account[1] as string;
        this.accountID = account[2] as number;
      }
    });

    if(this.authenticated)
      this.accountType === 'RM' ? window.location.href=`/RM/${this.accountID}` : window.location.href=`Client/${this.accountID}`;
    else
      alert('Authentication failed - check login credentials or account type.');
  }
}
