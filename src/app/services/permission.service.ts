import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private getPermissionsURL = "https://localhost:443/api/permissions";
  constructor(private http:HttpClient) { 

  }

  getPermissions(){
    const token = sessionStorage.getItem("token");

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    return this.http.get(this.getPermissionsURL, {headers : headers});
  }
}
