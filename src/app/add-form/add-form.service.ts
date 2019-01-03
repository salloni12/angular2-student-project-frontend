import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddFormService {

  constructor(private http:HttpClient,private router:Router) { }

  add(obj){
    return this.http.post("http://localhost:3000/add",obj);
  }
}
