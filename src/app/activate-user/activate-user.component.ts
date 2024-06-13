import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder } from '@angular/forms';
import { PermissionService } from '../services/permission.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrl: './activate-user.component.css'
})
export class ActivateUserComponent {

  user: any;
  myForm:any;
  permissions : any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private dialogRef: MatDialogRef<ActivateUserComponent>, private permissionService:PermissionService,private userService: UserService,private _formBuilder: FormBuilder) {

  }



  ngOnInit() {

    this.permissionService.getPermissions().subscribe((resp) =>{
      this.permissions = resp;
console.log(resp);
    });
    this.userService.getUserById(this.data).subscribe((response) => {
      this.user = response;
    })

  }

  onSubmit() {

  }
}
