import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main-service.service'
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MainService]
})
export class HomeComponent implements OnInit {
  constructor(private mainService: MainService) { }

  users = [];
  getUser(){
    this.mainService.getUser().subscribe(res => {
      this.users = res;
      console.log(res, 'users')
    })
  }

  ngOnInit() {
    this.getUser()
  }

}
