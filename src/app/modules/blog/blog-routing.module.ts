import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { SingleBlogComponent } from '../single-blog/single-blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  {path:'sblog', component: SingleBlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
