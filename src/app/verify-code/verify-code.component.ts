import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {


  verifyForm: any;

  submitted: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private dialogRef: MatDialogRef<VerifyCodeComponent>, private authService: AuthenticationService) {
    this.verifyForm = new FormGroup({
      code: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.data);

    var codeReq = {
      code: this.verifyForm.get('code').value
    }

    this.authService.verifyCode(codeReq, this.data.id).subscribe((res) => {
      console.log(res)
      if (res !== null) {
        this.router.navigate(['/home']);
        console.log(res);
        sessionStorage.setItem("token", (res as any).token);
        
        this.dialogRef.close();
      } else { 
        swal.fire("","Kod koji ste unijeli nije vazeci!", "error");
        //dodati neki error
      }
    },(err:HttpErrorResponse)=>{if(err.status==400)this.router.navigate(['forbidden']);})

  }

}
