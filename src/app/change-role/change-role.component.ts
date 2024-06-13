import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-change-role',
  templateUrl: './change-role.component.html',
  styleUrl: './change-role.component.css'
})
export class ChangeRoleComponent {

  myForm:any;
  selected:any;
  user:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private dialogRef: MatDialogRef<ChangeRoleComponent>, private userService: UserService,private _formBuilder: FormBuilder) {

  }

  ngOnInit(){

this.userService.getUserById(this.data).subscribe(resp => {
  this.user = resp;
  this.selected = (resp as any).role;
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
      "role": this.selected,
      "activated": this.user.activated,
      "commentsById":this.user.commentsById,
      "permissions": this.user.permissions
    }

      this.userService.changePermissions(editedUser, this.data).subscribe(response=>{

        console.log(response);
        this.dialogRef.close();
      })
    console.log(this.selected);
  }



}
