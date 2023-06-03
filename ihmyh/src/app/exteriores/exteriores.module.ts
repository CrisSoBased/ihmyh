import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExterioresPage } from './exteriores.page';

import { ExteriresPageRoutingModule } from './exteriores-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExteriresPageRoutingModule
  ],
  declarations: [ExterioresPage]
})
export class ExterioresPageModule {}
