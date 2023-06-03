import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InterioresPage } from './interiores.page';

import { InterioresPageRoutingModule } from './interiores-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterioresPageRoutingModule
  ],
  declarations: [InterioresPage]
})
export class InterioresPageModule {}
