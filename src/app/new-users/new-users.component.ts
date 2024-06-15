import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivateUserComponent } from '../activate-user/activate-user.component';
import { AddPermissionsComponent } from '../add-permissions/add-permissions.component';
import { ChangeRoleComponent } from '../change-role/change-role.component';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-new-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.css'
})
export class NewUsersComponent implements OnInit{


  isNewUsers : any;
  show : boolean = true;
  dataSource:any;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort | undefined;


  constructor(private userService:UserService,public dialogRef: MatDialogRef<ActivateUserComponent>, private dialog: MatDialog, private authService:AuthenticationService, private route:ActivatedRoute){}

  ngOnInit(){
 

 
      this.userService.getUsersUnactive().subscribe((data) => {
        this.dataSource = data;
        console.log(data)});
   
    

  }

  activateUser(id:any){

this.dialog.open(ActivateUserComponent, {data: id}).afterClosed().subscribe(result => {
  this.userService.getUsersUnactive().subscribe((data) => {
    this.dataSource = data;});
});
     

  }

  changeRole(id:any)
  {
   this.dialog.open(ChangeRoleComponent, {data: id}).afterClosed().subscribe(result => {
    this.userService.getUsersUnactive().subscribe((data) => {
      this.dataSource = data;});
  });
  }

  addPermissions(id:any){
    this.dialog.open(AddPermissionsComponent, {data: id}).afterClosed().subscribe(result => {
      this.userService.getUsersUnactive().subscribe((data) => {
        this.dataSource = data;});
    });
  }

}
