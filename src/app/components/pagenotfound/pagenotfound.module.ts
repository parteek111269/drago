import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PagenotfoundComponent } from './pagenotfound.component';
// angular md
import { MatButtonModule } from '@angular/material';

const routes: Routes = [
    { path: '', component: PagenotfoundComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule
    ],
    declarations: [PagenotfoundComponent],
    exports: [RouterModule]
})
export class PagenotfoundModule {}