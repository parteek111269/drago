import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LandingComponent } from './components/landing/landing.component';

const appRoute: Routes = [
	{path: '', component: LandingComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);

