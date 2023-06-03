import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pubList: any[] = [];
  credentials: { nome: string, pass: string, email: string } = { nome: '', pass: '', email: '' };

  constructor(private navCtrl: NavController) {}

  checkCredentials() {
    const usernameInput = document.querySelector('ion-input[placeholder="Username"]') as HTMLInputElement;
    const passwordInput = document.querySelector('ion-input[placeholder="password"]') as HTMLInputElement;
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Verificar se as credenciais estão armazenadas no local storage
    const storedCredentials = localStorage.getItem('user');
    if (storedCredentials) {
      const parsedCredentials = JSON.parse(storedCredentials);
      const storedUsername = parsedCredentials.username;
      const storedPassword = parsedCredentials.password;

      // Comparar as credenciais fornecidas com as armazenadas no local storage
      if (username === storedUsername && password === storedPassword) {
        console.log('Credenciais corretas. Você pode prosseguir.');
        this.credentials.nome = username;
        this.credentials.pass = password;
        this.credentials.email = storedUsername + "@gmail.com";
        this.navCtrl.navigateForward('produtos');
      } else {
        console.log('Credenciais incorretas. Verifique o nome de usuário e a senha.');
        // Adicione aqui a ação a ser executada quando as credenciais forem incorretas
      }
    } else {
      console.log('Credenciais não encontradas. Realize o registro primeiro.');
      // Adicione aqui a ação a ser executada quando as credenciais não forem encontradas no local storage
    }
  }
}
