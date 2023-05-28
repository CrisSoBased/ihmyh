import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class Login {

  constructor(   
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router) {

      this.matIconRegistry.addSvgIcon(
        'carrinho',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/cart-outline.svg")
      );
    }

    redirecionarParaPagina() {
      this.router.navigate(['/carrinho']);
    }
}
