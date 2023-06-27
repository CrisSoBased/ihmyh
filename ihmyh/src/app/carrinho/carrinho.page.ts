import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: 'carrinho.page.html',
  styleUrls: ['carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {
  carrinhoItems: any[] = [];
  indexs: string[] = [];

  constructor(
    private router: Router,
    public carrinhoService: CarrinhoService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const nomesFlores = ["rosa", "cravo", "orquidea", "margarida", "girassol", "tulipa"];
  
    this.carrinhoItems = this.carrinhoService.getCarrinho().map((item: any) => {
      const nomeFlor = this.removerAcentos(item.nome.toLowerCase());
      const foto = `../assets/images/Screenshot_${nomeFlor}.png`;
  
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
  
  async exibirMensagemCompraEfetuada() {
    const toast = await this.toastController.create({
      message: 'Compra efetuada!',
      duration: 2000,
      position: 'bottom'
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
  
  alterarQuantidade(item: any) {
    const quantidade = parseInt(item.novaQuantidade, 10);
  
      item.quantidade = quantidade;
      item.novaQuantidade = quantidade.toString();
      this.atualizarCarrinho();
  }  
  
  removerProduto(item: any) {
    const index = this.carrinhoItems.findIndex((carrinhoItem) => carrinhoItem.nome === item.nome);

    if (index !== -1) {
      this.carrinhoItems.splice(index, 1);
      this.atualizarCarrinho();
    }
  }

  private atualizarCarrinho() {
    this.carrinhoService.atualizarCarrinho(this.carrinhoItems);
  }

  calcularTotalCarrinho(): number {
    let total = 0;
  
    for (const item of this.carrinhoItems) {
      total += this.calcularPrecoTotal(item);
    }
  
    return total;
  }  
  
  finalizarCompra() {
    if (confirm('Tem certeza de que deseja finalizar a compra?')) {
      this.router.navigate(['/entrega']);
    }
  }
}
