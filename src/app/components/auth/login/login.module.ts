import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './login.component';
// angular md
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
    { path: '', component: LoginComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule, 
        ReactiveFormsModule,
        MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
        FlexLayoutModule
    ],
    declarations: [LoginComponent],
    exports: [RouterModule]
})
export class LoginModule {}