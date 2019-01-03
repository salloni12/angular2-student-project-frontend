import { Component, OnInit } from '@angular/core';
import { RegisterService } from "./register-service.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  registerUserData: any;

  registerdata: FormGroup;


  constructor(private registerservice: RegisterService, private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.registerdata = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  register() {
    this.spinner.show();
    this.registerservice.registerUser(this.registerdata.value)
      .subscribe(
        res => {
          this.spinner.hide();
          console.log(res)

          this.toastr.success('Register Succssfully!!');
          this.router.navigate(['/student-list'])



        },
        (err) => {
          this.spinner.hide();
          this.toastr.error('try again');


        }
      )

  }
}
