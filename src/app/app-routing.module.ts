import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/auth/resetpassword/resetpassword.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { ScrumboardComponent } from './components/scrumboard/scrumboard.component';

// services to resolve
import { ScrumboardserviceService } from './services/scrumboard/scrumboardservice.service';

const appRoute: Routes = [
	{path: '', component: LandingComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'forget-password', component: ForgotpasswordComponent},
	{path: 'reset-password', component: ResetpasswordComponent},
	{path: 'dashboard', component: MainlayoutComponent, children: 
		[
			{path: 'projects', component: ScrumboardComponent, resolve: {data: ScrumboardserviceService}}
		]
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);
