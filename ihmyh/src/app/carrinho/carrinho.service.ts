import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private storageKey = 'carrinhoItens'; // Chave para o localStorage

  itens: any[] = [];

  constructor() {
    this.carregarItensDoLocalStorage(); // Carrega os itens do localStorage ao inicializar o serviço
  }

  adicionarItem(item: any) {
    this.itens.push(item);
    this.salvarItensNoLocalStorage(); // Salva os itens no localStorage após adicionar um item
    console.log('Item adicionado ao carrinho:', item);
    console.log('Conteúdo do carrinho:', this.itens);
  }

  removerItem(item: any) {
    const index = this.itens.indexOf(item);
    if (index > -1) {
      this.itens.splice(index, 1);
      this.salvarItensNoLocalStorage(); // Salva os itens no localStorage após remover um item
    }
  }

  calcularTotal() {
    let total = 0;
    for (const item of this.itens) {
      total += item.preco;
    }
    return total;
  }

  getCarrinho(): any[] {
    return this.itens;
  }

  private salvarItensNoLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.itens));
  }

  private carregarItensDoLocalStorage() {
    const itens = localStorage.getItem(this.storageKey);
    if (itens) {
      this.itens = JSON.parse(itens);
    }
  }

  contarQuantidade(item: any): number {
    let quantidade = 0;
    for (const carrinhoItem of this.itens) {
      if (carrinhoItem.nome === item.nome) {
        quantidade++;
      }
    }
    return quantidade;
  }

  limparCarrinho() {
    this.itens = [];
    this.salvarItensNoLocalStorage();
  }

  getItensUnicos(): any[] {
    const itensUnicos: any[] = [];
    const itens: any[] = this.getCarrinho();
  
    itens.forEach((item) => {
      if (!itensUnicos.find((x) => x.nome === item.nome)) {
        itensUnicos.push(item);
      }
    });
  
    return itensUnicos;
  }

  atualizarCarrinho(carrinho: any[]) {
    this.itens = carrinho;
    this.salvarItensNoLocalStorage();
  }

  diminuirQuantidade(item: any) {
    if (item.quantidade > 1) {
      item.quantidade--;
      this.atualizarCarrinho(this.itens);
    }
  }

  aumentarQuantidade(item: any) {
    item.quantidade++;
    this.atualizarCarrinho(this.itens);
  }
}
