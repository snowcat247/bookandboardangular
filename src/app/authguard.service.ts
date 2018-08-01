import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('isAuth');

    console.log(token);
    // Check whether the token is expired and return
    // true or fals
    if(token != 'userauthorised')
    {
      console.log('is not auth');

      return false;
    }
    else
    {
      console.log('is auth' );
      return true;
    }
    
  }
}
