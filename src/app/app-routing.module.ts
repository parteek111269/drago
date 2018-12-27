import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';

const appRoute: Routes = [
	{path: '', component: LandingComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'forget-password', component: ForgotpasswordComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);

