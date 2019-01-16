import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { Registerlevel2Module } from './registerlevel2/registerlevel2.module';
import { Registerlevel1Module } from './registerlevel1/registerlevel1.module';
// angular md
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
    { path: '', component: RegisterComponent}
];

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule, 
        ReactiveFormsModule,
        MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatStepperModule,
        FlexLayoutModule,
        Registerlevel1Module, Registerlevel2Module

    ],
    exports: [RouterModule]
})
export class RegisterModule {}