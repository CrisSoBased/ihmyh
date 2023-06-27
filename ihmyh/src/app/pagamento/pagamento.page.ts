import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: 'pagamento.page.html',
  styleUrls: ['pagamento.page.scss'],
})
export class PagamentoPage {
  formaPagamento!: string;
  numeroTelemovel: string = '';

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {}

  confirmarPagamento() {
    if (confirm('Deseja Finalizar a Compra?')) {
      if (this.formaPagamento === 'mbway') {
        console.log('Pagamento via MBWay - Número de Telemóvel:', this.numeroTelemovel);
        alert('Esperando pagamento ser aceite.');
        this.limparCarrinhoERedirecionar();
      } else if (this.formaPagamento === 'referenciaMultibanco') {
        const referenciaAleatoria = this.gerarReferenciaAleatoria();
        alert('Referência Multibanco: ' + referenciaAleatoria);
        this.limparCarrinhoERedirecionar();
      }
    }
  }
  
  limparCarrinhoERedirecionar() {
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['/produtos']);
  }  
  
  gerarReferenciaAleatoria() {
    const referenciaLength = 10;
    const caracteresPermitidos = '0123456789';
    let referencia = '';
  
    for (let i = 0; i < referenciaLength; i++) {
      const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
      referencia += caracteresPermitidos.charAt(randomIndex);
    }
  
    return referencia;
  }  
}
