import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserauthenticationService {

branchUrl = "http://localhost:54933/api/users/";

 usernameenc : string;
  passwordenc : string;

  constructor(private http:Http) { }
  
  sendCredentials(username: string, password: string) {
  
 
  
  let usernameenc = btoa(username);
  let passwordenc = btoa(password);
    const url = this.branchUrl + usernameenc +'/' + passwordenc;
    console.log(usernameenc);
    return this.http.get(url)
   .map(response => response.text()
   )
    
    
}
}
