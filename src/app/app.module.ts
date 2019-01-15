import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';

//  animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular material design components
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';

// routing
import { routing } from './app-routing.module';
// guards
import { AuthGuardService } from './guards/auth-guard.service';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
//  Components
import { AppComponent } from './app.component';
// import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NumberonlyDirective } from './directives/numberonly/numberonly.directive';
import { Registerlevel1Component } from './components/auth/register/registerlevel1/registerlevel1.component';
import { Registerlevel2Component } from './components/auth/register/registerlevel2/registerlevel2.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { ScrumboardComponent } from './components/scrumboard/scrumboard.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

// fakedb
import { FakeDbService } from './fake_db/fakedb.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    // LandingComponent,
    RegisterComponent,
    NumberonlyDirective,
    Registerlevel1Component,
    Registerlevel2Component,
    MainlayoutComponent,
    ScrumboardComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatStepperModule, MatProgressBarModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    // fake db
    InMemoryWebApiModule.forRoot(FakeDbService, {
      delay             : 0,
      passThruUnknownUrl: true
    }),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
