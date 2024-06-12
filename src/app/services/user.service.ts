import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUnactiveUsersURL: string = "http://localhost:9000/api/users/unactive";
  private getUserByIdURL: string = "http://localhost:9000/api/users/";

  constructor(private http: HttpClient) { }

  getUsersUnactive() {

    const token = sessionStorage.getItem("token");

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return this.http.get(this.getUnactiveUsersURL, { headers: headers });

  }

  getUserById(id: any) {
    const token = sessionStorage.getItem("token");
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return this.http.get(this.getUserByIdURL + id, { headers: headers })
  }
}
