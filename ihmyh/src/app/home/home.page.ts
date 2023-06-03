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
  constructor(private navCtrl: NavController) {
    
  }
 
  checkCredentials() {
    const usernameInput = document.querySelector('ion-input[placeholder="Username"]') as HTMLInputElement;
    const passwordInput = document.querySelector('ion-input[placeholder="password"]') as HTMLInputElement;
    const username = usernameInput.value;
    const password = passwordInput.value;



    if (username === 'joao' && password === '1234') {
      console.log('Credenciais corretas. Você pode prosseguir.');
      // Adicione aqui a ação a ser executada quando as credenciais forem corretas
      this.credentials.nome = username; // Atribui o valor do nome de usuário à variável nome
      this.credentials.pass = password; // Atribui o valor da senha à variável pass
      this.credentials.email = username + "@gmail.com";
      this.navCtrl.navigateForward('produtos');
      
    } else {
      console.log('Credenciais incorretas. Verifique o nome de usuário e a senha.');
      // Adicione aqui a ação a ser executada quando as credenciais forem incorretas
    }
  }

}
