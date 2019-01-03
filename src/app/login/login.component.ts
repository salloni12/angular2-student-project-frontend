import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "./loginservice.service";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Login } from "./login";

import { AuthService,GoogleLoginProvider } from "angular-6-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  @Input() login1:Login;

  
  constructor(private router: Router,private socialAuthService:AuthService, private loginservice: LoginService, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.login1=new Login();
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
     if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
     
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.router.navigateByUrl('/student-list');
            sessionStorage.setItem('value',userData.email);
      }
    );
    //
  }

  loginUserData :any;
   
  login() {
    console.log(this.login1)

    this.spinner.show();
    this.loginservice.login(this.login1)
      .subscribe(
        res => {
          this.spinner.hide();
          console.log(res);
          this.toastr.success('Login Succssfully!!');
          this.router.navigate(['/student-list'])

        },
        (err) => {
          this.spinner.hide();
          this.toastr.error('something wrong!! try once');
        }

      )
  }
}
