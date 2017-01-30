import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      }
    ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
