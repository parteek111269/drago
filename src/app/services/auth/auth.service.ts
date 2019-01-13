import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public isUserLoggedIn: boolean = false;
	constructor(private http: HttpClient, private router: Router) {}
	// signin method : Promise<any>
	public signin(data: any){
		console.log(data);
		// return new Promise((resolve, reject) => {

		// });
	}
	// signup method
	public signup(data: any){
		// return new Promise((resolve, reject) => {

		// });
	}
}
