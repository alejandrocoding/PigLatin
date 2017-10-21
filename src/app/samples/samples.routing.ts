import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplesComponent } from './samples.component';

const routes: Routes = [
    { path: '', component: SamplesComponent }
];

export const SamplesRoutes: ModuleWithProviders = RouterModule.forChild(routes);