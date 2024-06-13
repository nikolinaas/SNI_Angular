import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
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

@NgModule({ declarations: [
        AppComponent,
        LogInComponent,
        HomeComponent,
        RegisterComponent,
        VerifyCodeComponent,
        ActivateUserComponent,
        AddPermissionsComponent,
        ChangeRoleComponent
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
        MatDialogModule], providers: [
        {
            provide: MatDialogRef,
            useValue: {}
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
