import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info.component';

const routes: Routes = [
    { path: '', component: InfoComponent }
];

export const InfoRoutes: ModuleWithProviders = RouterModule.forChild(routes);