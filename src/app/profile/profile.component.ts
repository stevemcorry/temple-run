import { Component, OnInit } from '@angular/core';
require('aws-sdk/dist/aws-sdk');
const keys = require('../../../config.js')

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  fileEvent(fileInput:any){    
    let AWSService = (<any>window).AWS;
    console.log(AWSService);
    let file = fileInput.target.files[0];
    AWSService.config.accessKeyId = keys.accessKey;
    AWSService.config.secretAccessKey = keys.secretKey;
    let bucket = new AWSService.S3({params: {Bucket : 'temple-run'}});
    let params = {Key: file.name, Body: file};
    bucket.upload(params, function(error,res){
      console.log('error', error);
      console.log('resp',res);
      
    })
  }

}
