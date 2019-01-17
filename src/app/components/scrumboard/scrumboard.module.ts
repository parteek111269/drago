import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
// modules
import { HeaderModule } from '../shared/header/header.module';
// components
import { ScrumboardComponent } from './scrumboard.component';
// guard
import { AuthGuardService as AuthGuard } from '../../guards/auth-guard.service';
// services
import { ScrumboardserviceService } from '../../services/scrumboard/scrumboardservice.service';
// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [
    { path: '', component: ScrumboardComponent, resolve: { data: ScrumboardserviceService }, canActivate: [AuthGuard] },
    { path: 'board', loadChildren: '../board/board.module#BoardModule', canActivate: [AuthGuard] }
];

@NgModule({
    declarations: [ScrumboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HeaderModule,
        FlexLayoutModule
    ],
    exports: [RouterModule, ScrumboardComponent]
})
export class ScrumboardModule {}