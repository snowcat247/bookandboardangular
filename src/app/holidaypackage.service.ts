import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HolidayPackage } from './holidaypackage';


@Injectable({
providedIn: 'root'
})
export class HolidayPackageService {

	
   holidaypackageUrl = "http://localhost:54933/api/packages";
    //Create constructor to get Http instance
	constructor(private http:Http) { 
	}
    
    //Fetch all branches
    getAllHolidayPackages(): Observable<HolidayPackage[]> {
        return this.http.get(this.holidaypackageUrl)
		   		.map(this.extractData)
		        .catch(this.handleError);
    }

postHolidayImage(file : File)
{

  let input = new FormData();
  input.append("file", file);

  console.log(file);
const imageposturl = 'http://localhost:54933/api/Images';
let headers = new Headers({'Content-Type': 'application/json'});


let options = new RequestOptions({ headers: headers });
  return this.http.post(imageposturl,input);

}

    postHolidayPackage(holiday : HolidayPackage) : Observable<any>
    {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.holidaypackageUrl, holiday, options)
                 .map(this.extractData)
                 .catch(this.handleError);
    }
/*
    postHolidayPackage(holidaypackage : HolidayPackage) : Observable<number>{

      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });
      return this.http.post(this.holidaypackageUrl, holidaypackage, options
        .map(success => success.status)
        .catch(this.handleError));


    }
    */
	//Create article
   // createArticle(article: Article):Observable<number> {
//	    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  //      let options = new RequestOptions({ headers: cpHeaders });
//        return this.http.post(this.articleUrl, article, options)
  //             .map(success => success.status)
    //           .catch(this.handleError);
//    }
	//Fetch article by id
  //  getArticleById(articleId: string): Observable<Article> {
	//	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//		let options = new RequestOptions({ headers: cpHeaders });
//		console.log(this.articleUrl +"/"+ articleId);
//		return this.http.get(this.articleUrl +"/"+ articleId)
//			   .map(this.extractData)
//			   .catch(this.handleError);
  //  }	
	//Update article
//    updateArticle(article: Article):Observable<number> {
//	    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  //      let options = new RequestOptions({ headers: cpHeaders });
    //    return this.http.put(this.articleUrl +"/"+ article.id, article, options)
    //           .map(success => success.status)
//               .catch(this.handleError);
//    }
    //Delete article	
  //  deleteArticleById(articleId: string): Observable<number> {
//		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
//		let options = new RequestOptions({ headers: cpHeaders });
//		return this.http.delete(this.articleUrl +"/"+ articleId)
//			   .map(success => success.status)
//			   .catch(this.handleError);
  //  }	
	private extractData(res: Response) {
	    let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status);
    }
}