import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
	private startTimer: string = 'wait';
	constructor(){}
	ngOnInit(): void {}
	ngOnDestroy(): void {}
	// inform registerlevel2 to start timer
	emiterForTimer(flag: string): void {
		this.startTimer = flag;
    }
}
