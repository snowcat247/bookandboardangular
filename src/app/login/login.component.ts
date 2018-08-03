import { Component, OnInit, OnChanges } from '@angular/core';
import { UserauthenticationService } from '../userauthentication.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

authenticated : string;
 statusCode : any;
 myusername : string;
 mypassword : string;
 form : FormGroup;
 auth : string;


 
  constructor(private authservice : UserauthenticationService,public router: Router) {

    this.form = new FormGroup({
      UserName: new FormControl(),
      Password: new FormControl(),
      submit: new FormControl()
      
   });

   }

   ngOnChanges(): void {
 
}

  ngOnInit() {
  
    
//this.getResponse();
  }
  
setval(){this.auth = this.authenticated};

  getResponse()
  {
  this.authservice.sendCredentials(this.myusername,this.mypassword)
.subscribe(
data =>{ this.authenticated = data;
this.setLocalStorage(data);
})  ;

this.ngOnChanges();
  }



 
 onSubmit()
 {
 const formModel = this.form.value;
 this.myusername = this.form.value.UserName;
 this.mypassword = this.form.value.Password;
 this.getResponse();



// this is working, now need to add local storage
//this.setLocalStorage();
//console.log(this.authenticated);
 
 }

 setLocalStorage(myval : string)
 {
  console.log('called local storage');
  console.log(myval);
  console.log(this.authenticated);
  localStorage.clear();

  localStorage.setItem('isAuth', this.authenticated);
  
  console.log(localStorage.getItem('isAuth'));
  var c = localStorage.getItem('isAuth');

  
 }


}

