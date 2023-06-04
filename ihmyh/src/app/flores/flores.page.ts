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
  filteredFlores: any[] = [];
  filteredIndexs: string[] = []; // Adicione o array filteredIndexs

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
    this.filteredFlores = this.flores; // Inicialize filteredFlores com todas as flores
    this.filteredIndexs = this.indexs; // Inicialize filteredIndexs com todas as imagens
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
    this.filteredIndexs.push(item.foto);
  } 

  handleInput(event: any) {
    const searchTerm = event.target.value.toLowerCase(); // Obtém o valor da pesquisa em letras minúsculas

    // Filtra as flores com base no valor da pesquisa
    this.filteredFlores = this.flores.filter((item: any, index: number) => {
      const nome = item.nome.toLowerCase();
      const indexStr = this.indexs[index].toLowerCase();
      return nome.includes(searchTerm) || indexStr.includes(searchTerm);
    });

    // Atualiza o array filteredIndexs com base no resultado filtrado
    this.filteredIndexs = this.filteredFlores.map((item: any, index: number) => {
      return this.indexs[this.flores.indexOf(item)];
    });
  }
}
