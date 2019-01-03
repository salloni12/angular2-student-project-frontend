import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { StudentListService } from "./student-list.service";


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private _listservice: StudentListService, private router: Router, private http: HttpClient) { }

  data: any;

  value;

  ngOnInit() {
    this._listservice.LoadData().subscribe((val) => { console.log("loaded data is ", JSON.stringify(val)); this.data = val });

    this.value=sessionStorage.getItem('value');

  }

  deleteUser(id: number) {
    this._listservice.delete(id).subscribe((val) => { console.log("value is", val) });
    window.location.reload();

  }

  addUser() {
     this.router.navigate(["/add-forms"])
  }

  editUser(id){
    this._listservice.edit(id).subscribe((data)=>{
      
      console.log("value is",data)
      sessionStorage.setItem('key',JSON.stringify(data));
      this.router.navigate(["/edit-forms"]);
    });
    
   
  }
}



