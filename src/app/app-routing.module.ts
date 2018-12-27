import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login/login.component';

const appRoute: Routes = [
	{path: '', component: LandingComponent},
	{path: 'login', component: LoginComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);

