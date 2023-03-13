import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTES } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './Views/app-component/app.component';
import { AboutComponent } from './Views/about/about.component';
import { HomeComponent } from './Views/home/home.component';
import { NavBarComponent } from './Views/nav-bar/nav-bar.component';
import { NotfoundComponent } from './Views/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './Imports/angular-material.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Views/login/login.component';
import { AuthInterceptorInterceptor } from './Interceptor/auth-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
