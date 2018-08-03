import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


import { AppComponent } from './app.component';
import { HolidaypackagesComponent } from './holidaypackages/holidaypackages.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { BranchesComponent } from './branches/branches.component';
import { HolidayPackageFormComponent } from './holiday-package-form/holiday-package-form.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessstaffComponent } from './loginsuccessstaff/loginsuccessstaff.component';


import { 
    AuthcheckandrouteService as Auth 
  } from './authcheckandroute.service';

const approutes: Routes = [
    { path: 'holidaypackages', component: HolidaypackagesComponent,canActivate: [Auth] },
    { path: 'branches', component: BranchesComponent },
     { path: 'login', component: LoginComponent },
     { path: 'loginsuccessstaff', component: LoginsuccessstaffComponent },
     { path: 'uploadholiday', component: HolidayPackageFormComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }