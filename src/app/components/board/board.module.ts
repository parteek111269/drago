import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
// guard
import { AuthGuardService as AuthGuard } from '../../guards/auth-guard.service';
// components
import { BoardComponent } from './board.component';

const routes: Routes = [
    { path: '', component: BoardComponent, canActivate: [AuthGuard] }
]

@NgModule({
    declarations: [BoardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class BoardModule {}