import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressBarService } from '../../services/progressbar/progressbar.service'
import { AuthService } from '../../services/auth/auth.service';

@Component({
  	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor(public auth: AuthService, private router: Router, private pb: ProgressBarService) {}
	ngOnInit(): void {}
}
