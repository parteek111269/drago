import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	private isLoggedIn: boolean = false;
	constructor(private router: Router) {
		if(localStorage.isloggedIn){
			this.isLoggedIn = true;
		}
	}
	ngOnInit(): void {
		
	}
	logout(): void {
		localStorage.clear();
		this.router.navigate(['']);
	}
}
