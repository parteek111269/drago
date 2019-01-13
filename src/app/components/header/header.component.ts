import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressBarService } from '../../services/progressbar/progressbar.service'

@Component({
  	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public isLoggedIn: boolean = false;
	constructor(private router: Router, private pb: ProgressBarService) {
		if(localStorage.isloggedIn){
			this.isLoggedIn = true;
		}
	}
	ngOnInit(): void {
		
	}
	logout(): void {
		this.pb.show();
		setTimeout(()=>{
			localStorage.clear();
			this.router.navigate(['']);
			this.pb.hide();
		}, 1000);
	}
}
