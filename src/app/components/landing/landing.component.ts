import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  	selector: 'app-landing',
  	templateUrl: './landing.component.html',
  	styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
	constructor(private router: Router, private auth: AuthService) {
		if(this.auth.isLoggedIn()){
            this.router.navigate(['/dashboard']);
        }
	}
	ngOnInit(): void {}
}
