import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegistarPage } from './registar.page';

import { RegistarPageRoutingModule } from './registar-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistarPageRoutingModule
  ],
  declarations: [RegistarPage]
})
export class RegistarPageModule {}
