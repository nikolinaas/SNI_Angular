import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PermissionService } from '../services/permission.service';
import { UserService } from '../services/user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-permissions',
  templateUrl: './add-permissions.component.html',
  styleUrl: './add-permissions.component.css'
})
export class AddPermissionsComponent {
  [x: string]: any;

  myForm: any;
  permissions: any;
  user: any;
  loadDone = false;
  id: any;
  updatedPermissions: any[] | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private dialogRef: MatDialogRef<AddPermissionsComponent>, private permissionService: PermissionService, private userService: UserService, private _formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.permissionService.getPermissions().subscribe((resp) => {
      this.permissions = resp;
      this.loadDone = true;
    });
    this.userService.getUserById(this.data).subscribe(data => {
      this.user = data;
      this.updatedPermissions = (data as any).permissions;
    })

  }

  onSubmit() {

    console.log(this.updatedPermissions);

    var editedUser = {
      "id": this.user.id,
      "name": this.user.name,
      "surname": this.user.surname,
      "username": this.user.username,
      "password": this.user.password,
      "email": this.user.email,
      "code": "",
      "role": this.user.role,
      "activated": this.user.activated,
      "commentsById":this.user.commentsById,
      "permissions": this.updatedPermissions
    }

      this.userService.changePermissions(editedUser, this.data).subscribe(response=>{

        console.log(response);
        this.dialogRef.close();
      })

  }

  doesUserHavePermission(id: any) {

    if (this.user.permissions.find((e: { id: any; }) => e.id === id))
      return true;
    else return false;
  }

  onChange(event: any, permission: any) {

    console.log(event.currentTarget.checked);
    if (event.currentTarget.checked) {
      if (!this.updatedPermissions?.find((e: { id: any; }) => e.id === permission.id))
        this.updatedPermissions?.push(permission);
    } else {
      if (this.updatedPermissions?.find((e: { id: any; }) => e.id === permission.id)) {


        this.updatedPermissions?.splice(permission, 1);

      }

    }

    // this.permissions=this.updatedPermissions;
  }
}
