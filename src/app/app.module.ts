import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app-routing.module';

import { LayoutModule } from './_shared/components/layout/layout.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    LayoutModule,
    AppRoutes
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }