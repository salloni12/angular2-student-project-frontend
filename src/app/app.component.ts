import { Component,Inject, OnInit  } from '@angular/core';

import { AuthService,GoogleLoginProvider } from "angular-6-social-login";

// import { LoginComponent } from "./login/login.component";

// import { RegisterComponent } from "./register/register.component";

// import { MatDialog, MatDialogRef  } from "@angular/material";

// import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  constructor(private socialAuthService:AuthService){}

  ngOnInit(){

  }


  // public isUserLoggedIn: boolean=false;

  // logout(){
   
  //     localStorage.removeItem('login');
  //     localStorage.removeItem('access_token');
  //     this.isUserLoggedIn = undefined;
  //     this.router.navigateByUrl('/login');
    
  // }

  // LoginDialogRef:MatDialogRef<LoginComponent>;

  // RegisterDialogRef:MatDialogRef<RegisterComponent>;

  // constructor(public dialog: MatDialog,private router:Router) {}

  // openDialog() {
  //   this.LoginDialogRef=this.dialog.open(LoginComponent,{
  //     hasBackdrop:false
  //   });

  //   this.LoginDialogRef.afterClosed().subscribe(
  //     result=>console.log(result)
  //   )
  //   if(this.RegisterDialogRef !== undefined){
  //     this.RegisterDialogRef.close();
  //   }
    
  // }

  // registerDialog(){
  //   this.RegisterDialogRef=this.dialog.open(RegisterComponent,{
  //     hasBackdrop:false
  //   });

  //   this.RegisterDialogRef.afterClosed().subscribe(
  //     result=>console.log(result) 
  //   )
  //   if(this.LoginDialogRef !== undefined){
  //     this.LoginDialogRef.close();
  //   }

  // }
}

