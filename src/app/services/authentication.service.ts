import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {


  private registerUserURL: string = "http://localhost:9000/api/authentication/register";
  private loginUserURL: string = "http://localhost:9000/api/authentication/login";
  private verifyCodeURL: string = "http://localhost:9000/api/authentication/verifyCode/";
  private oauth2URL: string = "http://localhost:9000/api/authentication/oauth2";

  constructor(private http: HttpClient) { }


  register(user: any) {

   return this.http.post(this.registerUserURL, user, {observe : 'response'});

  }

  login(loginReq: any) {

    return this.http.post(this.loginUserURL, loginReq);



  }

  verifyCode(req: any, id: any) {

    return this.http.post(this.verifyCodeURL + id, req);

  }

  decodeToken(): any {

    var token = sessionStorage.getItem("token");
    if (token !== null) {
      return jwt_decode.jwtDecode(token);

    }

  }

  getRole() {
    const decodedToken = this.decodeToken();
    return decodedToken.role;
  }

  getId(){
    const decodedToken = this.decodeToken();
    return decodedToken.jti;
  }
  isExpired() {
    var current_time = new Date().getTime() / 1000
    const expDate = this.decodeToken().exp;

    if (current_time > expDate) {
      this.logout();
      return true;
    }
    else return false;

  }
  isLogedIn() {
    const token = sessionStorage.getItem("token");
    if (token != null && !this.isExpired()) {
      return true;
    }
    else return false;
  }

  logout() {
    sessionStorage.removeItem("token");
  }

  loginOauth2(tokenId:any){
   return this.http.post(this.oauth2URL,tokenId);
  }
}
