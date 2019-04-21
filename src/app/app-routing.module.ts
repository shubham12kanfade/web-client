import { Routes } from '@angular/router';
import { ComingSoonComponent } from './modules/coming-soon/coming-soon.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', loadChildren: './modules/home/home.module#HomeModule'
    },
    {
        path: 'about', loadChildren: './modules/about-us/about-us.module#AboutUsModule'
    },
    {
        path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule'
    },
    {
        path: 'gallary', loadChildren: './modules/gallary/gallary.module#GallaryModule'
    },
    {
        path: 'bmi', loadChildren: './modules/calculator/calculator.module#CalculatorModule'
    },
    {
        path: 'blog', loadChildren: './modules/blog/blog.module#BlogModule'
    },
    {
        path: 'membership', component: ComingSoonComponent
    },
];




