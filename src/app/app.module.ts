import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Components1Component } from './components1/components1/components1.component';
import { Components2Component } from './components1/components2/components2.component';
import { Components3Component } from './components1/components3/components3.component';

@NgModule({
  declarations: [
    AppComponent,
    Components1Component,
    Components2Component,
    Components3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
