import { CommonModule } from '@angular/Common';
import { NgModule } from '@angular/core';

import { HeaderListComponent } from './headerlist/headerlist.component';

@NgModule({
  declarations: [
    HeaderListComponent
  ],
  exports: [
    HeaderListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
