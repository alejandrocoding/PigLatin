import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SamplesComponent } from './samples.component';
import { SamplesRoutes } from './samples.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SamplesRoutes
    ],
    declarations: [
        SamplesComponent
    ]
})

export class SamplesModule { }