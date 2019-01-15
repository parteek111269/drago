import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthRoutingModule } from "./auth-routing.module";
import { ForgotpasswordComponent } from './forgotpassword.component';
// angular md
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
    { path: '', component: ForgotpasswordComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule, 
        ReactiveFormsModule,
        MatButtonModule, MatFormFieldModule, MatInputModule,
        FlexLayoutModule
    ],
    declarations: [ForgotpasswordComponent],
    exports: [RouterModule]
})
export class ForgotPasswordModule {}