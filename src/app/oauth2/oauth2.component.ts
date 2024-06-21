import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyCodeComponent } from '../verify-code/verify-code.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrl: './oauth2.component.css'
})
export class Oauth2Component implements OnInit {
  showSpinner = false;

  constructor(private authService: AuthenticationService, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) {

  }

  ngOnInit() {

    var token = this.route.snapshot.fragment?.split('&')[5].split('=')[1];
    this.showSpinner = true;
    this.authService.loginOauth2(token).subscribe(resp => {
      this.showSpinner = false;
      if ((resp as any).activated == false) {
        Swal.fire("Your registration request is received", "You will be able to sign in when administrator approve that!", "info")
        this.router.navigate(['/login']);
      } else
        this.dialog.open(VerifyCodeComponent, { disableClose: true, data: resp });
    }, (err: HttpErrorResponse) => { if (err.status == 400) this.router.navigate(['forbidden']); })

  }
}
