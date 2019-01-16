import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './guards/auth-guard.service';
// components
import { ScrumboardComponent } from './components/scrumboard/scrumboard.component';

// services to resolve
import { ScrumboardserviceService } from './services/scrumboard/scrumboardservice.service';

const appRoute: Routes = [
	{ path: '', loadChildren: './components/landing/landing.module#LandingModule'},
	{ path: 'login', loadChildren: './components/auth/login/login.module#LoginModule' },
	{ path: 'register', loadChildren: './components/auth/register/register.module#RegisterModule' },
	{ path: 'forget-password', loadChildren: './components/auth/forgotpassword/forgotpassword.module#ForgotPasswordModule' },
	{ path: 'reset-password', loadChildren: './components/auth/resetpassword/resetpassword.module#ResetPasswordModule' },
	{ path: 'dashboard', loadChildren: './components/mainlayout/mainlayout.module#MainlayoutModule', canActivate: [AuthGuard] }
	// [
	// 	{ path: 'projects', component: ScrumboardComponent, resolve: { data: ScrumboardserviceService }, canActivate: [AuthGuard] }
	// ]
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);
