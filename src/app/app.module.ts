import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { MatCardModule} from '@angular/material/card';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { RegisterComponent } from './register/register.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import {MatDialogModule,MatDialog, MatDialogRef   } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ActivateUserComponent } from './activate-user/activate-user.component';
import { MatSelectModule } from '@angular/material/select';
import { AddPermissionsComponent } from './add-permissions/add-permissions.component';
import { ChangeRoleComponent } from './change-role/change-role.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DeactivateUserComponent } from './deactivate-user/deactivate-user.component';
import { NewCommentsComponent } from './new-comments/new-comments.component';
import { CommentsViewComponent } from './comments-view/comments-view.component';
import { DatePipe } from '@angular/common';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ShowCommentComponent } from './show-comment/show-comment.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { Oauth2Component } from './oauth2/oauth2.component';

@NgModule({ declarations: [
        AppComponent,
        LogInComponent,
        HomeComponent,
        RegisterComponent,
        VerifyCodeComponent,
        ActivateUserComponent,
        AddPermissionsComponent,
        ChangeRoleComponent,
        DeactivateUserComponent,
        NewCommentsComponent,
        CommentsViewComponent,
        AddCommentComponent,
        ShowCommentComponent,
        Oauth2Component
    ],
    bootstrap: [AppComponent], imports: [
        BrowserModule,
        AppRoutingModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        
        
        MatDialogModule,
                          AuthConfigModule], providers: [
            DatePipe,
        {
            provide: MatDialogRef,
            useValue: {}
        },
        {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
