import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginSessionService {

  private accounts = [
    [ ['TrueRM', 'secure'], 'RM', 32324],
    [ ['LoyalClient', 'password'], 'Client', 2]
  ];

  private accountID : number;
  private accountType : string;
  private authenticated : boolean = false;

  constructor() { }

  isAuthenticated() : boolean
  {
    if(!this.authenticated)
      this.authenticated = JSON.parse(localStorage.getItem('tenderSession'))[2] as boolean;
    return this.authenticated;
  }
  getAccountID() : number
  {
    if(!this.accountID)
      this.accountID = JSON.parse(localStorage.getItem('tenderSession'))[0] as number;
    return +this.accountID;
  }
  getAccountType() : string
  {
    if(!this.accountType)
      this.accountType = JSON.parse(localStorage.getItem('tenderSession'))[1] as string;
    return this.accountType;
  }

  authenticate(user:string, pw:string, type:string) : void
  {
    for(var x in this.accounts)
    {
      var account = this.accounts[x];
      if(account[0][0] == user && account[0][1] == pw && account[1] == type)
      {
        // is authenticated.
        this.authenticated = true;
        this.accountType = account[1] as string;
        this.accountID = account[2] as number;

        break;
      }
    }
  
    if(this.authenticated)
    {
      localStorage.setItem('tenderSession', JSON.stringify([this.accountID, this.accountType, this.authenticated]));
      window.location.href=`${this.accountType}/${this.accountID}`;
    }
    else
      alert('Authentication failed - check login credentials or account type.');
  }

  logout() : void
  {
    localStorage.removeItem('tenderSession');
    this.accountID = undefined;
    this.accountType = undefined;
    this.authenticated = false;

    window.location.href="/";
  }
}