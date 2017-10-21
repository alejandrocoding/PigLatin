import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InfoComponent } from './info.component';
import { InfoRoutes } from './info.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        InfoRoutes
    ],
    declarations: [
        InfoComponent
    ]
})

export class InfoModule { }