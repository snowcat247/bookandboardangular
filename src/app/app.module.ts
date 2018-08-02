import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';





import { AppComponent } from './app.component';
import { HolidaypackagesComponent } from './holidaypackages/holidaypackages.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { BranchesComponent } from './branches/branches.component';
import { HolidayPackageFormComponent } from './holiday-package-form/holiday-package-form.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routes';
import { LoginsuccessstaffComponent } from './loginsuccessstaff/loginsuccessstaff.component';
import { CustomeraccountswitchComponent } from './customeraccountswitch/customeraccountswitch.component';
/*
const appRoutes: Routes = [
  { path: 'holidaypackages', component: HolidaypackagesComponent },
   { path: 'branches', component: BranchesComponent },
    { path: 'login', component: LoginComponent },
];
*/

@NgModule({
  declarations: [
    AppComponent,
    HolidaypackagesComponent,
    NavigationbarComponent,
    BranchesComponent,
    HolidayPackageFormComponent,
    LoginComponent,
    LoginsuccessstaffComponent,
    CustomeraccountswitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
    /*
     RouterModule.forRoot(
      approutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
