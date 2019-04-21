import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { CcCalculatorComponent } from './cc-calculator/cc-calculator.component';
import { FcCaculatorComponent } from './fc-caculator/fc-caculator.component';

@NgModule({
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ],
  declarations: [
    BmiCalculatorComponent,
    CcCalculatorComponent,
    FcCaculatorComponent
  ]
})
export class CalculatorModule { }
