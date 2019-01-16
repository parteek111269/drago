import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Registerlevel2Component } from './registerlevel2.component';
// angular md
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [Registerlevel2Component],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, 
        ReactiveFormsModule,
        MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatStepperModule,
        FlexLayoutModule
    ],
    exports: [RouterModule, Registerlevel2Component]
})
export class Registerlevel2Module {}