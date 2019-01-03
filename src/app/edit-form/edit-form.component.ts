import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { EditFormService } from "./edit-form.service";

import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  editData = {}

   updateId;

  editgroup: FormGroup;

  constructor(private editservice: EditFormService,private toastr: ToastrService, private http: HttpClient, private _router: Router, private _fb: FormBuilder) { }

  ngOnInit() {
    this.editgroup = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      department: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(11)])]

    });

    console.log(JSON.parse(sessionStorage.getItem('key')));

    const data=JSON.parse(sessionStorage.getItem('key'));
    this.updateId=data._id;
    this.editgroup.patchValue({

      firstname:data.firstname,
      lastname:data.lastname,
      department:data.department,
      address:data.address,
      email:data.email,
      contact:data.contact


    })
    
  }

  updateUser() {

    console.log("I am in edit user functions");
    this.editgroup.value['id']= this.updateId;

    this.editservice.update(this.editgroup.value).subscribe((val) => { console.log("value is " + val) })
    this.toastr.success('update Succssfully!!');

    this._router.navigate(["/student-list"]);
    window.location.reload();

  }


}
