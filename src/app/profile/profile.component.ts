import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main-service.service'
require('aws-sdk/dist/aws-sdk');
const keys = require('../../../config.js')

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MainService]
})
export class ProfileComponent implements OnInit{
 constructor(private mainService: MainService) {}
  

  fileEvent(fileInput:any){
    const event = data => this.mainService.check(data)
    let data;    
    let AWSService = (<any>window).AWS;
    let file = fileInput.target.files[0];
    AWSService.config.accessKeyId = keys.accessKey;
    AWSService.config.secretAccessKey = keys.secretKey;
    let bucket = new AWSService.S3({params: {Bucket : 'temple-run'}});
    let params = {Key: 'stephen'+file.name, Body: file};
    bucket.upload(params, function(error,res){
      error? alert('Image cannot be uploaded'): event(res);
    })
  }

 ngOnInit(){
   this.mainService.getUser().subscribe(res => {console.log(res);
   })
 }

}
