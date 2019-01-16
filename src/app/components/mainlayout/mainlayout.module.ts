import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
// modules
import { HeaderModule } from '../shared/header/header.module';
// components
import { MainlayoutComponent } from './mainlayout.component';

const routes: Routes = [
    { path: '', component: MainlayoutComponent, children:
        [
            { path: 'projects', loadChildren: '../scrumboard/scrumboard.module#ScrumboardModule' }
        ]
    }
];

@NgModule({
    declarations: [MainlayoutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule,
    ],
    exports: [RouterModule]
})
export class MainlayoutModule {}