import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthRequest } from 'src/app/data/schema/auth-request';
import { AuthResponse } from 'src/app/data/schema/auth-response';
import { UserContext } from 'src/app/data/schema/user-context';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  auth(emailId: string, password: string): Observable<AuthResponse> { 
    const authUrl= 'http://localhost/authenticate';
    const authRequest: AuthRequest = {emailId: emailId, password: password};

    return this.httpClient.post<AuthResponse>
    (
      authUrl, 
      JSON.stringify(authRequest))
      .pipe(
        catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }  
}
