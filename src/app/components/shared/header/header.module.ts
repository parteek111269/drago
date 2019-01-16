import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './header.component';
// angular md
import { MatButtonModule } from '@angular/material';



@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule
    ],
    exports: [RouterModule, HeaderComponent]
})
export class HeaderModule {}