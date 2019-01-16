import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MainlayoutComponent } from './mainlayout.component';
import { HeaderModule } from '../shared/header/header.module';

const routes: Routes = [
    { path: '', component: MainlayoutComponent}
];

@NgModule({
    declarations: [MainlayoutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule
    ],
    exports: [RouterModule]
})
export class MainlayoutModule {}