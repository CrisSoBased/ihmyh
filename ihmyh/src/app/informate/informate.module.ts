import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InformatePage } from './informate.page';

import { InformatePageRoutingModule } from './informate-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformatePageRoutingModule
  ],
  declarations: [InformatePage]
})
export class InformatePageModule {}
