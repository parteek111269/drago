import { Component, OnInit, OnDestroy } from '@angular/core';
import { fuseAnimations } from '../../../animation/animations';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: fuseAnimations
})
export class RegisterComponent implements OnInit, OnDestroy {
	public startTimer: string = 'wait';
	constructor(private router: Router, private auth: AuthService){
		if(this.auth.isLoggedIn()){
            this.router.navigate(['/dashboard']);
        }
	}
	ngOnInit(): void {}
	ngOnDestroy(): void {}
	// inform registerlevel2 to start timer
	emiterForTimer(flag: string): void {
		this.startTimer = flag;
    }
}
