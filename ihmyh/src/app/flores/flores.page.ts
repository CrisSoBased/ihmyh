import { Component, OnInit, Injectable } from '@angular/core';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';
import { FloresService } from 'src/app/flores/flores.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'flores-home',
  templateUrl: 'flores.page.html',
  styleUrls: ['flores.page.scss'],
})
export class FloresPage implements OnInit {
  items: string[] = [];
  iss: string[] = ["rosa", "cravo", "orquidia", "margarida", "girassol", "tulipa"];
  indexs: string[] = [];
  flores: any[] = []; // Inicialize a propriedade flores com um array vazio
  carrinhoItens: string[] = [];

  constructor(
    private carrinhoService: CarrinhoService,
    private floresService: FloresService
  ) {}

  checkCredentials() {
    alert("Margaridas pó cesto");
  }

  ngOnInit() {
    for (let i = 1; i < 7; i++) {
      this.indexs.push(`../assets/images/Screenshot_${this.iss[i - 1]}.png`);
    }
    this.flores = this.floresService.getFlores(); // Atribua o valor retornado por getFlores() à propriedade flores
  }

  tack(item: any) {
    if (typeof item === 'string') {
      const resultado = item.slice(0, item.length - 4).substring(28, item.length - 4);
  
      for (let i = 0; i < this.flores.length; i++) {
        if (this.flores[i].nome == resultado) {
          console.log(i);
          this.carrinhoService.adicionarItem(this.flores[i]);
          console.log('Conteúdo do carrinho:', this.carrinhoService.getCarrinho());
        }
      }
    }
  }
  
  adicionarAoCarrinho(item: any) {
    this.carrinhoService.adicionarItem(item); // Adicionar a planta ao carrinho usando o serviço do carrinho
    console.log('Planta adicionada ao carrinho:', item);
  } 
}
