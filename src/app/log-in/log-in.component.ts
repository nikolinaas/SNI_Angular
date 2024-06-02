import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  

myForm: any;



  constructor(private router: Router) {

    this.myForm = new FormGroup({
      username: new FormControl(),
      password : new FormControl()
    });
  }

  loginClick(){
    
  }

  onSubmit(){
    this.router.navigate(['/home']);
  }
}
