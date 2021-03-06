import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthguardService } from './authguard.service';


@Injectable({
  providedIn: 'root'
})
export class AuthcheckandrouteService implements CanActivate {

  constructor(public auth: AuthguardService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      return false;
    }
    else
    {
      
      return true;
    }
   
      
      
  
    
}
}
