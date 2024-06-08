import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {


  private registerUserURL :string = "http://localhost:9000/api/authentication/register";
  private loginUserURL :string = "http://localhost:9000/api/authentication/login";
  private verifyCodeURL :string = "http://localhost:9000/api/authentication/verifyCode/";

  constructor(private http:HttpClient) { }


  register(user:any){

    this.http.post(this.registerUserURL,user).subscribe(data => {
      console.log(data);
    })

  }

  login(loginReq:any){

     return this.http.post(this.loginUserURL,loginReq);
    


  }

  verifyCode(req:any,id:any){

    return this.http.post(this.verifyCodeURL + id, req);

  }

  decodeToken(){

    var token = sessionStorage.getItem("token");
    if(token !== null){


    }

  }
}
