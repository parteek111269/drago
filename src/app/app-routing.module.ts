// import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './guards/auth-guard.service';

const appRoute: Routes = [
	{ path: '', loadChildren: './components/landing/landing.module#LandingModule'},
	{ path: 'login', loadChildren: './components/auth/login/login.module#LoginModule' },
	{ path: 'register', loadChildren: './components/auth/register/register.module#RegisterModule' },
	{ path: 'forget-password', loadChildren: './components/auth/forgotpassword/forgotpassword.module#ForgotPasswordModule' },
	{ path: 'reset-password', loadChildren: './components/auth/resetpassword/resetpassword.module#ResetPasswordModule' },
	{ path: 'dashboard', loadChildren: './components/mainlayout/mainlayout.module#MainlayoutModule', canActivate: [AuthGuard] },
	// if page not found
	{path: '404', loadChildren: './components/pagenotfound/pagenotfound.module#PagenotfoundModule'},
	{path: '**', redirectTo: '/404'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);
