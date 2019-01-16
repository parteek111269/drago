import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
// modules
import { HeaderModule } from '../shared/header/header.module';
// components
import { MainlayoutComponent } from './mainlayout.component';
import { ScrumboardComponent } from '../scrumboard/scrumboard.component';
// guard
import { AuthGuardService as AuthGuard } from '../../guards/auth-guard.service';
// services
import { ScrumboardserviceService } from '../../services/scrumboard/scrumboardservice.service';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [
    { path: '', component: MainlayoutComponent, children:
        [
            { path: 'projects', component: ScrumboardComponent, resolve: { data: ScrumboardserviceService }, canActivate: [AuthGuard] }
        ]
    }
];

@NgModule({
    declarations: [MainlayoutComponent, ScrumboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule,
        FlexLayoutModule
    ],
    exports: [RouterModule]
})
export class MainlayoutModule {}