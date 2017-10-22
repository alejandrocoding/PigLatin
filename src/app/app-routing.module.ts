import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'info', loadChildren: './info/info.module#InfoModule' },
    { path: 'samples', loadChildren: './samples/samples.module#SamplesModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });