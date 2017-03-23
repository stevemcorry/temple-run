import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MainService, CookieService]
})
export class LoginComponent implements OnInit{
  constructor(private router: Router, private mainService: MainService, private cookie: CookieService){}
  userName = '';
  password = '';
  rePassword = '';
  login(){
    if(this.userName && this.password && this.rePassword){
      if(this.password == this.rePassword){
        let user = {
          userName: this.userName,
          password: this.password
        }
        this.mainService.addUser(user).subscribe(res => {
          this.cookie.put('name', this.userName)
          this.cookie.put('pass', this.password)
          this.router.navigateByUrl('/home')
        });
      } else {
        alert('Passwords Do not match')
      }
    } else {
      alert('Please enter all info')
    }
  }
  loginCheck(){
    let test;
    test = this.cookie.getAll();
    if( test.name && test.pass){
      this.router.navigateByUrl('/home')
    }
    console.log(test);
  }
  ngOnInit(){
    this.loginCheck()
  }

}
