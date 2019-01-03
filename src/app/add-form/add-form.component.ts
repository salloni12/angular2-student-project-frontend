import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { AddFormService } from "./add-form.service";
import { ToastrService } from 'ngx-toastr';

import {FormControl,FormGroup,FormBuilder,Validators  } from "@angular/forms";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  providers:[AddFormService]
})
export class AddFormComponent implements OnInit {

  addData={}

  addgroup:FormGroup;

  constructor(private addservice:AddFormService,private toastr: ToastrService,private http:HttpClient,private _router:Router,private _fb:FormBuilder) {
   
}
  
  

  ngOnInit() {
    this.addgroup=this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      department: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required]
  
    });
   
  }

  SaveUser(){
    console.log("I am in save user functions")
    this.addservice.add(this.addgroup.value).subscribe((val)=>{console.log("value is " +val)});
    this.toastr.success('added Succssfully!!');
    this._router.navigate(['/student-list']);
    window.location.reload();
   
  }
}
