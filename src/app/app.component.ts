import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { dragoSplashScreenService } from '../@drago/splashscreen.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	// loading: boolean = false;
	constructor(private router: Router, private dragoSplashScreenService: dragoSplashScreenService){
		// this.router.events.subscribe((event: Event) => {
		// 	console.log(event instanceof NavigationStart)
	 //      	switch (true) {
	 //        	case event instanceof NavigationStart: {
	 //          		this.loading = true;
	 //          		break;
	 //        	}
		// 		case event instanceof NavigationEnd:
	 //        	case event instanceof NavigationCancel:
	 //        	case event instanceof NavigationError: {
	 //          		this.loading = false;
	 //          		break;
	 //        	}
	 //        	default: {
	 //          		break;
	 //        	}
	 //      	}
	 //    });
	}
	changeOfRoutes(): void{
		window.scrollTo(0, 0);
	}
}
