import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutos } from './lista-produtos';
import { SharedModule } from "../../shared/shared-module";



@NgModule({
  declarations: [
    ListaProdutos
  ],
  imports: [
    CommonModule,
    SharedModule
]
})
export class ListaProdutosModule { }
