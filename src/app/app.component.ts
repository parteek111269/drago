import { Component } from '@angular/core';

import { dragoSplashScreenService } from '../@drago/splashscreen.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private dragoSplashScreenService: dragoSplashScreenService){

	}
	changeOfRoutes(){
		window.scrollTo(0, 0);
	}
}
