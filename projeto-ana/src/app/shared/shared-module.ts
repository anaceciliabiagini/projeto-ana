
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Botao } from './botao/botao';

@NgModule({
  declarations: [
    Botao
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    Botao
  ]
})
export class SharedModule { }