import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch.service';
//import {Article} from '../article';
import {Branch} from '../branch';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

 
 branches : Branch[];
 statusCode : any;

  constructor(private branchService: BranchService) { 
  
}

  ngOnInit() {
   
   this.getAllBranches();
  
  
  }

getAllBranches() {
this.branchService.getAllBranches()
.subscribe(
data => this.branches = data,
errorCode => this.statusCode = errorCode);

}

//Fetch all articles
 //  getAllArticles() {
//        this.branchService.getAllArticles()
//		  .subscribe(
  //              data => this.articles = data,
    //            errorCode =>  this.statusCode = errorCode); 
      //          }


 
  
}
