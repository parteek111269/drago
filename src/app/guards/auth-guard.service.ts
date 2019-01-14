import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(private router: Router, private auth: AuthService) {}

  	public canActivate(): boolean {
    	if (!this.auth.isLoggedIn()) {
      		this.router.navigate(['login'])
      		return false;
		}
    	return true;
  	}
}