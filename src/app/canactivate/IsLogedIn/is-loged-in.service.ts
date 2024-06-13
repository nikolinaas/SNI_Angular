import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class IsLogedInService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    if (this.authService.isLogedIn()) {
      return true;

    } else {
      Swal.fire("","Vaša sesija je istekla, prijavite se ponovo!","error")
      return this.router.parseUrl('/login');}

  }
}
