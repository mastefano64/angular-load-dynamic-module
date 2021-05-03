import { CommonModule } from '@angular/Common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app.material.module';

import { SharedModule } from '../shared/shared.module';

import { CompFeature1Component } from './compfeature/compfeature1.component';
import { List1Component } from './list/list1.component';
import { ListItem1Component } from './listitem/listitem1.component';

@NgModule({
  declarations: [
    CompFeature1Component,
    List1Component,
    ListItem1Component,
  ],
  exports: [
    CompFeature1Component
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
    home: CompFeature1Component 
  }
 }