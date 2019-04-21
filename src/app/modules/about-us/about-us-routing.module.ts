import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AboutUsComponent } from './about-us.component';

const routes: Routes = [{
  path: '', component: AboutUsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
