import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  submitted: boolean = false;

registerForm!: FormGroup;


constructor(private router: Router,private formBuilder:FormBuilder,private authService:AuthenticationService) {

  this.registerForm = this.formBuilder.group({
    username: ['',[Validators.required, Validators.minLength(1)]],
    password: ['',[Validators.required, Validators.minLength(1)]],
    name: ['',[Validators.required, Validators.minLength(1)]],
    surname: ['',[Validators.required, Validators.minLength(1)]],
    email: ['',[Validators.required, Validators.minLength(1), Validators.email]],
  });
}


onSubmit() {
  if(!this.registerForm.invalid){

    const user = {

      username : this.registerForm.get('username')?.value,
      password : this.registerForm.get('password')?.value,
      name : this.registerForm.get('name')?.value,
      surname : this.registerForm.get('surname')?.value,
      email : this.registerForm.get('email')?.value


    }

      this.authService.register(user).subscribe((response) => {
        console.log(response.status)
        if(response.status==201)
        Swal.fire("Success!", "You successfully registered your account!","success");
        this.registerForm.reset();
      })

  }
  }

}
