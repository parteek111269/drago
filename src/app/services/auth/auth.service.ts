import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public currentUser: any;
	constructor(private http: HttpClient, private router: Router) {
		let token = localStorage.getItem('token');
    	if (token) {
      		let jwt = new JwtHelper();
      		this.currentUser = jwt.decodeToken(token);
    	}
	}
	// signin method : Promise<any>
	public signin(credentials: any): Observable<any>{
		let url = '';
		// return this.http.post(url, JSON.stringify(credentials)).map((response: any) => {
			// let result = response.json();
      		// if (result && result.token) {
				let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6ImRyYWdvIiwiZW1haWwiOiJwYXJ0ZWVrQHVpbWF0aWMuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.ACjhlh-8KaeE2VzTYjRC_qmu2tn9nofjkhk1_lVaXiA';
        		localStorage.setItem('token', token);
				let jwt = new JwtHelper();
				this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
				return this.currentUser; 
      		// }
      		// else return false; 
		// })
		// retu
	}
	// signup method
	public signup(data: any){
		// return new Promise((resolve, reject) => {

		// });
	}
	public logout(): void{

	}
	public isLoggedIn() { 
		let jwt = new JwtHelper();
		let token = localStorage.getItem('token');
		if(!token) return false
		let expirationDate = jwt.getTokenExpirationDate(token);
		let isExpired = jwt.isTokenExpired(token);
		return !isExpired;
	}
}
