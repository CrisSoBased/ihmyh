import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';
import { FloresService } from 'src/app/flores/flores.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'flores-home',
  templateUrl: 'flores.page.html',
  styleUrls: ['flores.page.scss'],
})
export class FloresPage implements OnInit {
  items: string[] = [];
  iss: string[] = ['rosa', 'cravo', 'orquidea', 'margarida', 'girassol', 'tulipa'];
  indexs: string[] = [];
  flores: any[] = [];
  carrinhoItens: string[] = [];
  filteredFlores: any[] = [];
  filteredIndexs: string[] = [];

  precoMinimo: number = 0;
  precoMaximo: number = 20;
  corSelecionada: string = '';

  showFilters: boolean = false;

  constructor(
    private carrinhoService: CarrinhoService,
    private floresService: FloresService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    for (let i = 1; i < 7; i++) {
      this.indexs.push(`../assets/images/Screenshot_${this.iss[i - 1]}.png`);
    }
    this.floresService.getFlores().subscribe((data: any[]) => {
      this.flores = data;
      this.filteredFlores = this.flores;
      this.filteredIndexs = this.indexs;
    });
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
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

  async exibirMensagemItemAdicionado(item: any) {
    const toast = await this.toastController.create({
      message: item.nome + ' Adicionada!',
      duration: 2000,
      position: 'bottom' 
    });
    toast.present();
  }
  
  
  adicionarAoCarrinho(item: any) {
    const carrinhoItem = this.carrinhoService.getCarrinho().find(carrinhoItem => carrinhoItem.nome === item.nome);
    
    if (carrinhoItem) {
      // Se o item já estiver no carrinho, definir o valor inicial do input como a quantidade atual do item
      carrinhoItem.novaQuantidade += (item.novaQuantidade || 1); // Adicione a quantidade do item ao carrinhoItem existente
    } else {
      // Se o item não estiver no carrinho, definir o valor inicial do input como 0 ou a quantidade desejada inicialmente
      item.novaQuantidade = item.quantidade; // ou a quantidade desejada inicialmente
      item.quantidade = item.quantidade || 1;
      this.carrinhoService.adicionarItem(item); // Adicione o item ao carrinho
    }
    
    console.log('Planta adicionada ao carrinho:', item);
    this.filteredIndexs.push(item.foto);
    this.exibirMensagemItemAdicionado(item);
  
    // Atualize o carrinho no serviço após a modificação
    this.carrinhoService.atualizarCarrinho(this.carrinhoService.getCarrinho());
  }  
   

  handleInput(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    this.filteredFlores = this.flores.filter((item: any) => {
      const nome = item.nome.toLowerCase();
      const index = this.flores.indexOf(item);
      const indexStr = this.indexs[index].toLowerCase();

      return (
        (this.precoMinimo === 0 || item.preco >= this.precoMinimo) &&
        (this.precoMaximo === Infinity || item.preco <= this.precoMaximo) &&
        (this.corSelecionada === '' || item.cor.toLowerCase() === this.corSelecionada) &&
        (nome.includes(searchTerm) || indexStr.includes(searchTerm))
      );
    });

    this.filteredIndexs = this.filteredFlores.map((item: any, index: number) => {
      return this.indexs[this.flores.indexOf(item)];
    });
  }

  getUniqueColors(): string[] {
    const uniqueColors = Array.from(new Set(this.filteredFlores.map((item) => item.cor)));
    return uniqueColors.filter((color) => color !== 'azul');
  }

  filtrar() {
    // Filtrar as flores com base nos critérios selecionados
    this.filteredFlores = this.flores.filter((item: any) => {
      const preco = item.preco;
      const cor = item.cor.toLowerCase();

      // Verificar se o preço está dentro do intervalo selecionado
      const precoDentroDoIntervalo = preco >= this.precoMinimo && preco <= this.precoMaximo;

      // Verificar se a cor corresponde à cor selecionada
      const corCorresponde = this.corSelecionada === '' || cor === this.corSelecionada.toLowerCase();

      return precoDentroDoIntervalo && corCorresponde;
    });

    // Atualizar os índices das imagens filtradas
    this.filteredIndexs = this.filteredFlores.map((item: any) => {
      const index = this.flores.findIndex((f) => f.nome === item.nome);
      return this.indexs[index];
    });
  }

  resetFilters() {
    this.precoMinimo = 0;
    this.precoMaximo = Infinity;
    this.corSelecionada = '';
    this.filtrar();
  }

  onInputFocus(item: any) {
    item.showLabel = false;
  }
  
  onInputBlur(item: any) {
    if (!item.quantidade) {
      item.showLabel = true;
    }
  }
}
