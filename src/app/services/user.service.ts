import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUnactiveUsersURL: string = "http://localhost:9000/api/users/unactive";
  private getActiveUsersURL: string = "http://localhost:9000/api/users/active";
  private getUserByIdURL: string = "http://localhost:9000/api/users/";
  private activateUserByIdURL: string = "http://localhost:9000/api/users/activateUser/";
  
  private changeUsersPermissionsByIdURL: string = "http://localhost:9000/api/users/changePermissions/";
  constructor(private http: HttpClient) { }


  getHeaders() {
    const token = sessionStorage.getItem("token");

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return headers;
  }
  getUsersUnactive() {


    return this.http.get(this.getUnactiveUsersURL, { headers: this.getHeaders() });

  }
  getUsersActive() {


    return this.http.get(this.getActiveUsersURL, { headers: this.getHeaders() });

  }

  getUserById(id: any) {

    return this.http.get(this.getUserByIdURL + id, { headers: this.getHeaders() })
  }

  activateUser(user: any, id: any) {

    return this.http.put(this.activateUserByIdURL + id, user, { headers: this.getHeaders(), observe: 'response' })

  }

  changePermissions(user: any, id: any){
    return this.http.put(this.activateUserByIdURL + id, user, { headers: this.getHeaders(), observe: 'response' })
  }
}
