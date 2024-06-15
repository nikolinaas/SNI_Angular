import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ModeratorCanActivateService implements CanActivate{

  constructor(private router: Router, private authService:AuthenticationService) { 

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

   
      if(this.authService.getRole()=="MODERATOR" || this.authService.getRole()=="ADMIN"){
        return true;
      }
      
      return this.router.parseUrl('/home');
    }

  
}
