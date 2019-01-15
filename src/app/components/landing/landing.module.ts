import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LandingComponent } from './landing.component';
// angular md
import { MatButtonModule } from '@angular/material';

const routes: Routes = [
    { path: '', component: LandingComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule
    ],
    declarations: [LandingComponent],
    exports: [RouterModule]
})
export class LandingModule {}