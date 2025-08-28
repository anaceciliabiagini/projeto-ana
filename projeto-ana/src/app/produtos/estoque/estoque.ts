import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
  produtos = [
    { nome: 'Notebook', preco: 3500, estoque: 5 },
    { nome: 'Teclado', preco: 150, estoque: 0 },
    { nome: 'Monitor', preco: 1200, estoque: 3 }
  ];

  aumentarPrecos() {
    this.produtos = this.produtos.map(p => ({
      ...p,
      preco: +(p.preco * 1.1).toFixed(2)   // aumenta 10%
    }));
  }

  diminuirPrecos() {
    this.produtos = this.produtos.map(p => ({
      ...p,
      preco: +(p.preco * 0.9).toFixed(2)   // diminui 10%
    }));
  }
}