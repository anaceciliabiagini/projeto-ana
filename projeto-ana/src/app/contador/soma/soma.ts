import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soma',
  standalone: false,
  templateUrl: './soma.html',
  styleUrl: './soma.css'
})
export class Soma implements OnInit {

  public valor: number = 0;

  constructor() {}

  ngOnInit(): void {
      
  }

  incrementar(): void {
    this.valor = this.valor + 1;
  }

}