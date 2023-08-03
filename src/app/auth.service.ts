import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable,BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData =new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient,private _Router:Router){
    if( localStorage.getItem('userToken') !== null)
    {

      this.decoudUserData();
    }

  }

  logOut()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/logIn'])
  }

  decoudUserData()
  {
    let encodedToken =JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any  = jwtDecode(encodedToken)
    console.log(decodedToken);
    this.userData.next(decodedToken) ;
  }

  signUp(userData:string):Observable<any>
  {

    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',userData)
  }
  signIn(userData:string):Observable<any>
  {

    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',userData)
  }
}
