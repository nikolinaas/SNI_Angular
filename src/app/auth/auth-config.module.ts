import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://accounts.google.com',
            redirectUrl: "http://localhost:4200/oauth2",
            postLogoutRedirectUri: window.location.origin,
            clientId: "426117424339-6mctmdqse68m8sl9395gj69j7bq8bohv.apps.googleusercontent.com",
            scope: 'openid email profile', // 'openid profile ' + your scopes
            responseType: 'id_token token',
            silentRenew: false,
            silentRenewUrl: window.location.origin + '/silent-renew.html',
            renewTimeBeforeTokenExpiresInSeconds: 10,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
