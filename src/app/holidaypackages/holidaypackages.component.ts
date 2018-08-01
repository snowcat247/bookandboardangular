import { Component, OnInit } from '@angular/core';
import { HolidayPackageService } from '../holidaypackage.service';
import {HolidayPackage} from '../holidaypackage';

@Component({
  selector: 'app-holidaypackages',
  templateUrl: './holidaypackages.component.html',
  styleUrls: ['./holidaypackages.component.css']
})
export class HolidaypackagesComponent implements OnInit {

holidaypackages : HolidayPackage[];
 statusCode : any;

  constructor(private holidaypackageservice : HolidayPackageService) { }

  ngOnInit() {
  this.getAllHolidayPackages();
  }
  
  getAllHolidayPackages() {
this.holidaypackageservice.getAllHolidayPackages()
.subscribe(
data => this.holidaypackages = data,
errorCode => this.statusCode = errorCode);

}
}
