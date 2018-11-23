import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation='operation', result?:T)
  {
    return (error : any) : Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);
      
      return of(result as T);
    };
  }

  getAllCustomers() : Observable<Customer[]>
  {
    return this.http.get<Customer[]>('/api').pipe(
      tap(_ => console.log('Getting all customers.'))
    );
  }


}
