import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JwtModule} from '@auth0/angular-jwt';
import {CookieService} from 'ngx-cookie-service';
import {AuthInterceptor} from "./main/auth.interceptor";

export function tokenGetter(){
  return localStorage.getItem('jwt');
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,FormsModule, HttpClientModule,
  JwtModule.forRoot({
    config:{
      tokenGetter:tokenGetter,
      allowedDomains:['localhost:16615'],
      disallowedRoutes: []
    }
  })],
  // AngularFireModule.initializeApp(firebaseConfig),
  // AngularFireAuthModule, AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  CookieService,[
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }]],
  bootstrap: [AppComponent],
})


export class AppModule {}
