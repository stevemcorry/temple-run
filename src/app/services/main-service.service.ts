import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

  constructor(private http: Http){}

    check(res) {
      console.log(res);
    }
    getImages(){
      console.log('function hit');
      return this.http.get(`http://localhost:8000/api/get`);
    }


}
