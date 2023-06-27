import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';

@Component({
  selector: 'app-forma-entrega',
  templateUrl: 'entrega.page.html',
  styleUrls: ['entrega.page.scss'],
})
export class EntregaPage {
  formaEntrega!: string;
  endereco: string = '';
  codigoPostal: string = '';
  cidade: string = '';

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {}

  confirmarEntrega() {
    
    if (confirm('Tem a certeza que os dados estão corretos?')) {
      this.router.navigate(['/pagamento']);
    }
  }
}
