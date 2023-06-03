import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FloresService {
  private flores: any[] = [
    { nome: 'Rosa', preco: 10 },
    { nome: 'Cravo', preco: 8 },
    { nome: 'Orquídea', preco: 15 },
    { nome: 'Margarida', preco: 7 },
    { nome: 'Girassol', preco: 9 },
    { nome: 'Tulipa', preco: 12 },
  ];

  getFlores() {
    return this.flores;
  }
}
