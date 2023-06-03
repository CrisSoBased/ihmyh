import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conta',
  templateUrl: 'conta.page.html',
  styleUrls: ['conta.page.scss'],
})
export class ContaPage {
  credentials: { nome: string, email: string } = { nome: '', email: '' };

  constructor(private navCtrl: NavController) {}

  ionViewDidEnter() {
    this.loadCredentialsFromStorage();
  }

  loadCredentialsFromStorage() {
    const storedCredentials = localStorage.getItem('user');
    if (storedCredentials) {
      const parsedCredentials = JSON.parse(storedCredentials);
      this.credentials.nome = parsedCredentials.username;
      this.credentials.email = parsedCredentials.email;
    }
  }

  updateCredentials() {
    const storedCredentials = localStorage.getItem('user');
    if (storedCredentials) {
      const parsedCredentials = JSON.parse(storedCredentials);
      parsedCredentials.username = this.credentials.nome;
      parsedCredentials.email = this.credentials.email;
      localStorage.setItem('user', JSON.stringify(parsedCredentials));
      alert('Dados atualizados com sucesso!');
    }
  }
}
