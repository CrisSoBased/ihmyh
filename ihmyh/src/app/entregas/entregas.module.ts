import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EntregasPage } from './entregas.page';

import { EntregasPageRoutingModule } from './entregas-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregasPageRoutingModule
  ],
  declarations: [EntregasPage]
})
export class EntregasPageModule {}
