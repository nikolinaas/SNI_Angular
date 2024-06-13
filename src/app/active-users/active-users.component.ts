import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../services/user.service';
import { ActivateUserComponent } from '../activate-user/activate-user.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { ChangeRoleComponent } from '../change-role/change-role.component';
import { AddPermissionsComponent } from '../add-permissions/add-permissions.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent {


  
  isNewUsers : any;
  show : boolean = true;
  dataSource:any;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort | undefined;


  constructor(private userService:UserService,public dialogRef: MatDialogRef<ActivateUserComponent>, private dialog: MatDialog, private authService:AuthenticationService, private route:ActivatedRoute){}

  ngOnInit(){
 
    
      this.userService.getUsersActive().subscribe((data) => {
        this.dataSource = data;
        console.log(data)});
  
    

  }

  deactivateUser(id:any){

this.dialog.open(ActivateUserComponent, {data: id}).afterClosed().subscribe(result => {
  this.userService.getUsersActive().subscribe((data) => {
    this.dataSource = data;});
});
     

  }

  changeRole(id:any)
  {
   this.dialog.open(ChangeRoleComponent, {data: id}).afterClosed().subscribe(result => {
    this.userService.getUsersActive().subscribe((data) => {
      this.dataSource = data;});
  });
  }

  addPermissions(id:any){
    this.dialog.open(AddPermissionsComponent, {data: id}).afterClosed().subscribe(result => {
      this.userService.getUsersActive().subscribe((data) => {
        this.dataSource = data;});
    });
  }

}
