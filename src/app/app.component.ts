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
	constructor(private router: Router, private dragoSplashScreenService: dragoSplashScreenService){}
	changeOfRoutes(): void{
		window.scrollTo(0, 0);
	}
}
