import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { FcCaculatorComponent } from './fc-caculator/fc-caculator.component';
import { CcCalculatorComponent } from './cc-calculator/cc-calculator.component';

const routes: Routes = [
  { path: '', component: BmiCalculatorComponent },
  { path: 'fc', component: FcCaculatorComponent },
  { path: 'cc', component: CcCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
