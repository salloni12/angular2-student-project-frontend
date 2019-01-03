import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _loginurl = "http://localhost:3000/login";

  constructor(private http:HttpClient,private router:Router) { }

  login(user){
    console.log("login successfully"+JSON.stringify(user));
    return this.http.post<any>(this._loginurl,user );
  }
}
