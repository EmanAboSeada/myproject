import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from '../registraion/user.model';

interface AuthResopnseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) { }

  userSignUp(email: string, password: string) {
    return this.http.post<AuthResopnseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDR_uoQi4eXsMKahYWsSkWtAOz4mz3xSRs',
      {
        "email": email,
        "password": password,
        "returnSecureToken": true
      }).pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        )
      }));
  }
  userSignIn(email: string, password: string) {
    return this.http.post<AuthResopnseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDR_uoQi4eXsMKahYWsSkWtAOz4mz3xSRs',
      {
        "email": email,
        "password": password,
        "returnSecureToken": true
      }
    ).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn
      )
    }));
  }

  autoLogin(){
    const userData:{
      email:string,
      id:string,
      _token:string,
      _tokenExpirationDate:string
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)  
    )
    if(loadedUser.token){
      this.user.next(loadedUser);
    }

  }

  logout(){
    this.user.next(null);
    localStorage.removeItem('userData');
  }

  private handleAuthentication(email:string,userId:string, token:string, expiresIn:number){
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
    const user = new User (
      email,
      userId, 
      token,
      expirationDate);
      this.user.next(user);
      localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMes = 'An unknown error occurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMes);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMes = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMes = 'Invalid email or password';
        break;
      case 'INVALID_PASSWORD':
        errorMes = 'Invalid email or password';
        break;
    }
    return throwError(errorMes);
  }


}
