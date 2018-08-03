import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HolidayPackageService } from '../holidaypackage.service';
import {HolidayPackage} from '../holidaypackage';
import { resolveDefinition } from '@angular/core/src/view/util';

@Component({
  selector: 'app-holiday-package-form',
  templateUrl: './holiday-package-form.component.html',
  styleUrls: ['./holiday-package-form.component.css']
})
export class HolidayPackageFormComponent implements OnInit {



  file : File;
  fileName : any;
  holiday : HolidayPackage;
  result : boolean;

  form : FormGroup;
  post : any;

 _http : any;

  constructor( private holidaypackageservice : HolidayPackageService) {

    this.form = new FormGroup({
      holidayPackageName: new FormControl(),
      holidayPackageDescription: new FormControl(),
      holidayImagePath: new FormControl(),
      holidayPackageTypeId : new FormControl(),
      holidayStartDate : new FormControl(),
      holidayEndDate : new FormControl(),
      holidayPrice : new FormControl()
   });


   }

  ngOnInit() {

  

  }

  submit(post)
  {

    
this.holiday = new HolidayPackage(1,post.holidayPackageName,post.holidayPackageDescription
,post.holidayPackageTypeId,post.holidayImagePath,post.holidayEndDate,post.holidayStartDate,post.holidayPrice);

/*
    this.holiday.HolidayPackageName = post.holidayPackageName;
    this.holiday.HolidayPackageTypeId = post.holidayPackageTypeId;
    this.holiday.HolidayPackageDescription = post.holidayPackageDescription;
    this.holiday.HolidayStartDate = post.holidayStartDate;
    this.holiday.HolidayEndDate = post.holidayEndDate;
    this.holiday.HolidayImagePath = post.holidayImagePath;
    this.holiday.HolidayPrice = post.holidayPrice;
*/
    console.log("post here");
    //console.log(this.holiday);

    console.log(this.file);

this.holidaypackageservice.postHolidayImage(this.file).subscribe(res=>{console.log(res)});

/*
  this.holidaypackageservice.postHolidayPackage(this.holiday)
  .subscribe(res => this.result = res);
  console.log(this.result);
  */ 
  }
 

  fileEvent(fileInput: Event){
  this.file = fileInput.target.files[0];
  
}



}
