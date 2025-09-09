import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: string[] = ['Coca-cola', 'Fanta', 'Guaraná'];

}