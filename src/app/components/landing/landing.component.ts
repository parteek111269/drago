import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-landing',
  	templateUrl: './landing.component.html',
  	styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
	constructor(private router: Router) {
		if(localStorage.isloggedIn){
            this.router.navigate(['/dashboard']);
        }
	}
	ngOnInit(): void {}
}
