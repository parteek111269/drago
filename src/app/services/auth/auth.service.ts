import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
import { ProgressBarService } from '../../services/progressbar/progressbar.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public currentUser: any;
	constructor(private pb: ProgressBarService, private http: HttpClient, private router: Router) {
		let token = localStorage.getItem('token');
    	if (token) {
      		let jwt = new JwtHelper();
      		this.currentUser = jwt.decodeToken(token);
    	}
	}
	// signin method : observable
	public signin(credentials: any): Observable<any>{
		let url = '';
		// return this.http.post(url, JSON.stringify(credentials)).map((response: any) => {
			// let result = response.json();
      		// if (result && result.token) {
				let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJkcmFnbyIsImVtYWlsIjoicGFydGVla0B1aW1hdGljLmNvbSIsImlhdCI6MTUxNjIzOTAyMiwiYXZhdGFyIjoiIn0.X7JkJRtCOYfTHc_1-lJyVSOXOszjFlHzZYB1EZFs6Aw';
        		localStorage.setItem('token', token);
				let jwt = new JwtHelper();
				this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
				return this.currentUser; 
      		// }
      		// else return false; 
		// })
		// retu
	}
	// signup method: observable
	public signup(credentials: any){
		let url = '';
		return this.http.post(url, JSON.stringify(credentials)).map((response: any) => {
			let result = response.json();
			console.log(result);
		});
		// return new Promise((resolve, reject) => {

		// });
	}
	public logout(): void{
		this.pb.show();
		setTimeout(() => {
			localStorage.clear();
			this.router.navigate(['']);
			this.currentUser = null;
			this.pb.hide();
		}, 1000)
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
