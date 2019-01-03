import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentListComponent } from "./student-list/student-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AddFormComponent } from "./add-form/add-form.component";
import { EditFormComponent } from "./edit-form/edit-form.component";


const routes = [


    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'student-list', component: StudentListComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add-forms', component: AddFormComponent },
    { path: 'edit-forms', component: EditFormComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule { }