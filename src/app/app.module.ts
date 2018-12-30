import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//  animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular material design components
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
// routing
import { routing } from './app-routing.module';
//  Components
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/auth/resetpassword/resetpassword.component';
import { NumberonlyDirective } from './directives/numberonly/numberonly.directive';
import { Registerlevel1Component } from './components/auth/register/registerlevel1/registerlevel1.component';
import { Registerlevel2Component } from './components/auth/register/registerlevel2/registerlevel2.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    NumberonlyDirective,
    Registerlevel1Component,
    Registerlevel2Component,
    MainlayoutComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, 
    MatStepperModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
