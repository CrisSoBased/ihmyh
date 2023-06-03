import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CarrinhoPage } from './carrinho.page';

import { CarrinhoPageRoutingModule } from './carrinho-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhoPageRoutingModule
  ],
  declarations: [CarrinhoPage]
})
export class CarrinhoPageModule {}
