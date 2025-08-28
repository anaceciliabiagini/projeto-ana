import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Soma } from './contador/soma/soma';
import { Diretiva } from './estrutura/diretiva/diretiva';

const routes: Routes = [
 { path: 'contador', component: Soma},
 { path: 'alunos', component: Diretiva }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }