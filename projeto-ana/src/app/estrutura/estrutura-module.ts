import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Diretiva } from './diretiva/diretiva';



@NgModule({
  declarations: [
    Diretiva
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Diretiva
  ]

})
export class EstruturaModule { }