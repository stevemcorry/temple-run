import { Injectable } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

  constructor(private http: Http, private cookie: CookieService){}

    check(res) {
      let image = {
        url: res.Location,
        position: 1,
        user: this.cookie.get('id')
      }
      console.log(res, image);
    }
    addUser(user){
      return this.http.post(`/api/post/user`, user)
      .map(data=>{
        console.log(data)
        return data.json();
      });
    }
    getImages(image){
      console.log('function hit');
      return this.http.post(`/api/get/images`, image)
      .map(data=>{
        console.log(data)
        return data.json();
      });
    }
    postImage(image){
      console.log('function hit');
      return this.http.post(`/api/post/images`, image)
      .map(data=>{
        console.log(data)
        return data.json();
      });
    }
    getUser(){
      console.log('function hit');
      return this.http.get(`/api/get/users`)
      .map(data=>{
        console.log(data)
        return data.json();
      });
    }


}
