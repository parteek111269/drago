import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './login/login.component';
// angular md
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
        CommonModule, 
        AuthRoutingModule,
        FormsModule, 
        ReactiveFormsModule,
        MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
        FlexLayoutModule
    ],
  declarations: [LoginComponent]
})
export class AuthModule {}