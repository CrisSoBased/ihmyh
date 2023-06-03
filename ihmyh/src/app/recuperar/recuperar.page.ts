import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'recuperar-produtos',
  templateUrl: 'recuperar.page.html',
  styleUrls: ['recuperar.page.scss'],
})


export class RecuperarPage {
  constructor(private navCtrl: NavController) {}
  checkCredentials() {
    const EmailInput = document.querySelector('ion-input[placeholder="Meta o Email para solitação da password"]') as HTMLInputElement;
   
    const Email = EmailInput.value;
    
    var aux = 0; 
    if(Email.length > 5){
        for(let i = 0; i < Email.length; i++){
            if(Email[i] === "@"){
                aux = 1;
            }
        }
    }


    if (Email.substring(0, 4) === 'joao' && aux == 1) {
      console.log('Credenciais corretas. Você pode prosseguir.');
      // Adicione aqui a ação a ser executada quando as credenciais forem corretas
      this.navCtrl.navigateForward('home');
      
    } else {
      console.log('Credenciais incorretas. Verifique o nome de usuário e a senha.');
      // Adicione aqui a ação a ser executada quando as credenciais forem incorretas
    }

    }
}