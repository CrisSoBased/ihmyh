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
    const values: [string, string, string, string] = [
      usernameInput.value,
      passwordInput.value,
      emailInput.value,
      repitapasswordInput.value,
    ];
    var aux = 0;
    for(let i = 0; i < 4; i++){
      console.log("1");
      
      var soma = 0; 
      if(aux == 0){
        for(let j = 0; j < values[i].length; j++){
          if(values[i][j] !== " "  && soma == 0){
            soma = 1;
          }
          console.log("2");
        }
        if(soma == 0){
          aux = 1;
        }
      }
      
    }
    if(repita !== password){
      aux = 1;
      console.log("1");
    }

    if (aux == 0) {
      console.log('Credenciais corretas. Você pode prosseguir.');
      // Adicione aqui a ação a ser executada quando as credenciais forem corretas
      //username !== '' && password !== '' && email !== '' && repita === password
      this.navCtrl.navigateForward('produtos');
    } else {
      console.log('Credenciais incorretas. Verifique o nome de usuário e a senha.');
      // Adicione aqui a ação a ser executada quando as credenciais forem incorretas
    }
  }

}
