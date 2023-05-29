import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private navCtrl: NavController
  ) {
    this.matIconRegistry.addSvgIcon(
      'carrinho',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/cart-outline.svg")
    );
  }

  goBack() {
    this.navCtrl.back();
  }
}
