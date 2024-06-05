import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private registerUserURL :string = "http://localhost:9000/api/authentication/register";
  private loginUserURL :string = "http://localhost:9000/api/authentication/login";

  constructor(private http:HttpClient) { }


  register(user:any){

    this.http.post(this.registerUserURL,user).subscribe(data => {
      console.log(data);
    })

  }

  login(loginReq:any){

     return this.http.post(this.loginUserURL,loginReq);
    


  }
}
