import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivateUserComponent } from '../activate-user/activate-user.component';
import { UserService } from '../services/user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deactivate-user',
  templateUrl: './deactivate-user.component.html',
  styleUrl: './deactivate-user.component.css'
})
export class DeactivateUserComponent {

  user: any;
  showLoader = false;
  myForm:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private dialogRef: MatDialogRef<DeactivateUserComponent>, private userService: UserService,private _formBuilder: FormBuilder) {

  }



  ngOnInit() {

    
    this.userService.getUserById(this.data).subscribe((response) => {
      this.user = response;
      console.log(response);
    })

  }

  onSubmit() {

    var editedUser = {

      "id": this.user.id,
      "name": this.user.name,
      "surname": this.user.surname,
      "username": this.user.username,
      "password": this.user.password,
      "email": this.user.email,
      "code": "",
      "role": this.user.role,
      "activated": false,
      "commentsById":this.user.commentsById,
      "permissions": this.user.permissions

    }
    this.showLoader = true;
    this.userService.deactivateUser(editedUser,this.data).subscribe(response => {
      console.log(response);
      if(response.status == 200){
        this.showLoader = false;
        this.dialogRef.close()
      }
    },(error) => {
      console.log(error.status);
  })

  }
  
  close(){

    this.dialogRef.close()
  }
}
