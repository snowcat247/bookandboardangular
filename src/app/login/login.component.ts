import { Component, OnInit } from '@angular/core';
import { UserauthenticationService } from '../userauthentication.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

authenticated : string;
 statusCode : any;
 myusername : string;
 mypassword : string;
 form : FormGroup;

 
  constructor(private authservice : UserauthenticationService) { }

  ngOnInit() {
  
  this.form = new FormGroup({
       UserName: new FormControl(),
       Password: new FormControl(),
    });
    
//this.getResponse();
  }
  
  getResponse()
  {
  this.authservice.sendCredentials(this.myusername,this.mypassword)
.subscribe(
data => this.authenticated = data,
errorCode => this.statusCode = errorCode);
  }
 
 onSubmit()
 {
 const formModel = this.form.value;
 this.myusername = this.form.value.UserName;
 this.mypassword = this.form.value.Password;
 this.getResponse();
 
// this is working, now need to add local storage
 
 }
 // getAllHolidayPackages() {
//this.holidaypackageservice.getAllHolidayPackages()
//.subscribe(
//data => this.holidaypackages = data,
//errorCode => this.statusCode = errorCode);

}

