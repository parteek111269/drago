import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//  animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular material design components
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';

// routing
import { routing } from './app-routing.module';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { HeaderComponent } from './components/header/header.component';
import { ScrumboardComponent } from './components/scrumboard/scrumboard.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
// fakedb
import { FakeDbService } from './fake_db/fakedb.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

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
    MainlayoutComponent,
    HeaderComponent,
    ScrumboardComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay             : 0,
      passThruUnknownUrl: true
    }),
    FlexLayoutModule,
    MatStepperModule, MatProgressBarModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
