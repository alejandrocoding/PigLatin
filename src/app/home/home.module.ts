import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';

import { PigLatinPipe } from '@pipes/index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HomeRoutes
    ],
    declarations: [
        HomeComponent,
        PigLatinPipe
    ]
})

export class HomeModule { }