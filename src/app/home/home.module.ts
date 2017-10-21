import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HomeRoutes
    ],
    declarations: [
        HomeComponent
    ]
})

export class HomeModule { }