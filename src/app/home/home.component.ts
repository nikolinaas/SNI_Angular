import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {

  isRoleAdmin: boolean = false;
  isRoleModerator: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) {

  }

  ngOnInit() {

    const role = this.authService.getRole();
    if (role == "ADMIN") {
      this.isRoleAdmin = true;
      this.isRoleModerator = true;
    } else if (role == "MODERATOR") {
      this.isRoleAdmin = false;
      this.isRoleModerator = true;
    } else {
      this.isRoleAdmin = false;
      this.isRoleModerator = false;
    }

  }

  showUsers(event:any) {
    this.router.navigate(['/home/newUsers']);
  }

  showActiveUsers(){
    this.router.navigate(['/home/activatedUsers']);
  }
  showUnapprovedComments(){
    this.router.navigate(['/home/newComments']);
  }

  showComments(id:any){
   this.router.navigate(['/home/comments',id]).then(() => {
    window.location.reload();
  });
  }
}
