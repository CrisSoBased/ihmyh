import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: 'carrinho.page.html',
  styleUrls: ['carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  carrinhoItems: any[] = [];

  constructor(public carrinhoService: CarrinhoService,
    private toastController: ToastController) {}

  ngOnInit() {
    this.carrinhoItems = this.carrinhoService.getCarrinho();
    console.log('Itens do carrinho:', this.carrinhoItems);
  }

  // Função para exibir a mensagem de compra efetuada
  async exibirMensagemCompraEfetuada() {
  const toast = await this.toastController.create({
    message: 'Compra efetuada!',
    duration: 2000, // Tempo de exibição da mensagem em milissegundos
    position: 'bottom' // Posição da mensagem na tela (top, bottom, middle)
  });
  toast.present();
  }

  contarQuantidade(item: any): number {
    let quantidade = 0;
    for (const carrinhoItem of this.carrinhoService.getCarrinho()) {
      if (carrinhoItem.nome === item.nome) {
        quantidade++;
      }
    }
    return quantidade;
  }

  limparCarrinho() {
    if (confirm('Tem certeza de que deseja limpar o carrinho?')) {
    this.carrinhoService.limparCarrinho();
    }
  }

  calcularPrecoTotal(item: any): number {
    return item.preco * this.contarQuantidade(item);
  }

  diminuirQuantidade(item: any) {
    if (item.quantidade > 1) {
      item.quantidade--;
      this.atualizarCarrinho();
    }
  }

  aumentarQuantidade(item: any) {
    item.quantidade++;
    this.atualizarCarrinho();
  }

  private atualizarCarrinho() {
    this.carrinhoService.atualizarCarrinho(this.carrinhoItems);
  }

  calcularTotalCarrinho() {
    return this.carrinhoService.calcularTotal();
  } 
  
  finalizarCompra() {
    if (confirm('Tem certeza de que deseja finalizar a compra?')) {
    this.carrinhoService.limparCarrinho();

    this.exibirMensagemCompraEfetuada();
    }
  }
}


