import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrl: './oauth2.component.css'
})
export class Oauth2Component implements OnInit{

  constructor(private authService:AuthenticationService, private route:ActivatedRoute){

  }

  ngOnInit(){

    console.log("oooooooooooaaaaaaaaaauuuuuuuuuuuuuuuuuuuttttttttttthhhhhhhhhh")
      var token = this.route.snapshot.fragment?.split('&')[5].split('=')[1]; //getting id_token
      console.log(token)
      this.authService.loginOauth2(token).subscribe(resp => {
        
      })

  }
}
