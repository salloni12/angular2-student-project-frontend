import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  constructor(private http:HttpClient) { }

  //public _listUrl = "http://localhost:3000/list";

  LoadData() {
    return this.http.get("http://localhost:3000/list");
  }

  delete(id: number) {
    return this.http.post('http://localhost:3000/delete', { "id": id });
  }
  

  // add(firstname,lastname,department,address,email,contact) {
  //   return this.http.post('http://localhost:3000/add', { "studentdata": firstname,lastname,department,address,email,contact });
    
  // }
  edit(id){
    return this.http.post('http://localhost:3000/edit', { "id": id });
    
  }
}
