import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserCanActivateService implements CanActivate{

  constructor(private router:Router, private authService:AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
   
    if(this.authService.getRole()=="USER"){
      return true;
    }else{
      return this.router.parseUrl('/unauthorized');
    }

  }
}
