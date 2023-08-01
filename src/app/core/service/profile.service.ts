import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  profile(): Observable<any> {   
    return this.httpClient.post<any>("http://localhost/user/profile", {}).pipe(
      catchError(this.handleError)
    ); 
  }
  
  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  } 
}
