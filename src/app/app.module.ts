import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SocialLoginModule,GoogleLoginProvider,AuthServiceConfig} from 'angular-6-social-login'
import { Angular2SocialLoginModule } from "angular2-social-login";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app.routing.module";

import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentListComponent } from "./student-list/student-list.component";

import { DashboardComponent } from './dashboard/dashboard.component';

import { AddFormComponent } from "./add-form/add-form.component";

import { ReactiveFormsModule,FormsModule } from "@angular/forms";

import {EditFormComponent } from "./edit-form/edit-form.component";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('./google.txt')
        }
      ]
          
  );
  return config;
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentListComponent,
    DashboardComponent,
    AddFormComponent,
    EditFormComponent
  
  ],
  imports: [
    BrowserModule,AppRoutingModule,Angular2SocialLoginModule,SocialLoginModule,BrowserAnimationsModule,MaterialModule,HttpClientModule,HttpModule,NgxSpinnerModule,ToastrModule.forRoot(),ReactiveFormsModule,FormsModule
  ],
  entryComponents:[
    LoginComponent,RegisterComponent,AddFormComponent,StudentListComponent //dialog component

  ],
  exports:[
    NgxSpinnerModule

  ],
  
  providers: [
    {
      provide:AuthServiceConfig,
      useFactory:getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
