import { CommonModule } from '@angular/Common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app.material.module';

import { SharedModule } from '../shared/shared.module';

import { CompFeature2Component } from './compfeature/compfeature2.component';
import { List2Component } from './list/list2.component';
import { ListItem2Component } from './listitem/listitem2.component';

@NgModule({
  declarations: [
    CompFeature2Component,
    List2Component,
    ListItem2Component,
  ],
  exports: [
    CompFeature2Component
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class FeatureModule {
  static components = {
    home: CompFeature2Component 
  }
 }