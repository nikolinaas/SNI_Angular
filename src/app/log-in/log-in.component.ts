import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VerifyCodeComponent } from '../verify-code/verify-code.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  navigate() {
    this.router.navigate(['/register']);
  }



  myForm: any;



  constructor(private router: Router, private authService: AuthenticationService,public dialogRef: MatDialogRef<VerifyCodeComponent>, private dialog:MatDialog) {

    this.myForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  loginClick() {

  }

  onSubmit() {
    const logReq = {

      username: this.myForm.get('username').value,
      password: this.myForm.get('password').value

    }
    this.authService.login(logReq).subscribe((user) => {
      console.log(user);
      if (user != null) {
        this.dialog.open(VerifyCodeComponent, { disableClose: true , data : user});
      }
    })

  }
}
