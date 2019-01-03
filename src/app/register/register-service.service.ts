import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _registerurl = "http://localhost:3000/register";

  constructor(private http: HttpClient,private _router:Router) { }

  registerUser(user) {

    return this.http.post(this._registerurl, user, {})
.pipe(map((res: any) => res));
  }
}
