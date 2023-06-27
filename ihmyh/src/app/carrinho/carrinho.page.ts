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
  indexs: string[] = []; // Adicione essa linha para criar o array indexs
  

  constructor(
    public carrinhoService: CarrinhoService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const nomesFlores = ["rosa", "cravo", "orquidea", "margarida", "girassol", "tulipa"];
  
    this.carrinhoItems = this.carrinhoService.getCarrinho().map((item: any) => {
      const nomeFlor = this.removerAcentos(item.nome.toLowerCase());
      const index = nomesFlores.findIndex(flor => flor === nomeFlor);
      const foto = index !== -1 ? `../assets/images/Screenshot_${encodeURIComponent(nomesFlores[index])}.png` : '';
  
      return {
        ...item,
        foto: foto
      };
    });
  
    console.log('Itens do carrinho:', this.carrinhoItems);
  }
  
  removerAcentos(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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
    const carrinhoItem = this.carrinhoService.getCarrinho().find(carrinhoItem => carrinhoItem.nome === item.nome);
  
    if (carrinhoItem) {
      return carrinhoItem.quantidade;
    }
  
    return 0;
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


