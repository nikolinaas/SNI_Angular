import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {


  verifyForm:any;

  submitted : boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private router:Router,private dialogRef: MatDialogRef<VerifyCodeComponent>, private authService:AuthenticationService){
    this.verifyForm = new FormGroup({
      code: new FormControl()
    });
  }

  onSubmit(){
console.log(this.data);
this.authService.verifyCode(this.verifyForm.get('code').value,this.data.id).subscribe((res) => {
  console.log(res)
  if(res!==null ){
this.router.navigate(['/home']);
console.log(res);
sessionStorage.setItem("token", (res as any).token);
this.dialogRef.close();
  }else{
    //dodati neki error
  }
})

  }

}
