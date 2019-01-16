import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Registerlevel1Component } from './registerlevel1.component';
// angular md
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [Registerlevel1Component],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, 
        ReactiveFormsModule,
        MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatStepperModule,
        FlexLayoutModule
    ],
    exports: [RouterModule, Registerlevel1Component]
})
export class Registerlevel1Module {}