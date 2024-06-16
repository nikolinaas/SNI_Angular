import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { IsLogedInService } from './canactivate/IsLogedIn/is-loged-in.service';
import { ModeratorCanActivateService } from './canactivate/ModeratorCanActivate/moderator-can-activate.service';
import { NewUsersComponent } from './new-users/new-users.component';
import { AdminCanActivateService } from './canactivate/AdminCanActivate/admin-can-activate.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { NewCommentsComponent } from './new-comments/new-comments.component';
import { CommentsViewComponent } from './comments-view/comments-view.component';
import { UserCanActivateService } from './canactivate/UserCanActivate/user-can-activate.service';
import { Oauth2Component } from './oauth2/oauth2.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LogInComponent },
  { path: 'home', component: HomeComponent, canActivate: [IsLogedInService], 
  children: [
    { path: 'newUsers', component: NewUsersComponent, canActivate: [AdminCanActivateService] },
    { path: 'activatedUsers', component: ActiveUsersComponent, canActivate: [AdminCanActivateService] },
    { path: 'newComments', component: NewCommentsComponent, canActivate:[ModeratorCanActivateService] },
    { path: 'comments/:id', component: CommentsViewComponent, canActivate:[UserCanActivateService] }

] },
  { path: 'register', component: RegisterComponent },
  { path: 'oauth2', component: Oauth2Component }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
