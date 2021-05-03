import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app.material.module';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { CompFirstComponent } from './compfirst/compfirst.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    CompFirstComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }