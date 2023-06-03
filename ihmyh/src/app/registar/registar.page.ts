import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registar',
  templateUrl: 'registar.page.html',
  styleUrls: ['registar.page.scss'],
})
export class RegistarPage {

  constructor(private navCtrl: NavController) {}

  checkCredentials() {
    const usernameInput = document.querySelector('ion-input[placeholder="Username"]') as HTMLInputElement;
    const passwordInput = document.querySelector('ion-input[placeholder="password"]') as HTMLInputElement;
    const repitapasswordInput = document.querySelector('ion-input[placeholder="Repita a Password"]') as HTMLInputElement;
    const emailInput = document.querySelector('ion-input[placeholder="Email"]') as HTMLInputElement;
    const username = usernameInput.value;
    const password = passwordInput.value;
    const email = emailInput.value;
    const repita = repitapasswordInput.value;

    // Verificar as credenciais
    if (username !== '' && password !== '' && email !== '' && repita === password) {
      console.log('Credenciais corretas. Você pode prosseguir.');

      // Criar um objeto com os dados do usuário
      const conta = {
        username: username,
        password: password,
        email: email
      };

      // Salvar o objeto de usuário em local storage usando o Storage do Ionic
      localStorage.setItem('user', JSON.stringify(conta));
      
      // Redirecionar para a página de produtos ou outra página desejada
      this.navCtrl.navigateForward('home');
    } else {
      console.log('Credenciais incorretas. Verifique o nome de usuário e a senha.');
      // Adicione aqui a ação a ser executada quando as credenciais forem incorretas
    }
  }
}
