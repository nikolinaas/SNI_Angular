import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivateUserComponent } from '../activate-user/activate-user.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-new-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.css'
})
export class NewUsersComponent implements OnInit{


  dataSource:any;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort | undefined;


  constructor(private userService:UserService,public dialogRef: MatDialogRef<ActivateUserComponent>, private dialog: MatDialog){}

  ngOnInit(){

    this.userService.getUsersUnactive().subscribe((data) => {
      this.dataSource = data;
      console.log(data)});

  }

  activateUser(id:any){

this.dialog.open(ActivateUserComponent, {data: id});
     

  }

  changeRole()
  {
    alert("promijeni rolu")
  }

}
