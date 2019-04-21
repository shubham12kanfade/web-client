import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GallaryRoutingModule } from './gallary-routing.module';
import { GallaryComponent } from './gallary.component';

@NgModule({
  imports: [
    CommonModule,
    GallaryRoutingModule
  ],
  declarations: [GallaryComponent]
})
export class GallaryModule { }
