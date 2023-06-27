import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeFloresPageRoutingModule } from './home-flores-routing.module';

import { HomeFloresPage } from './home-flores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeFloresPageRoutingModule
  ],
  declarations: [HomeFloresPage]
})
export class HomeFloresPageModule {}
