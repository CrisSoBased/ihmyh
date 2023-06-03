import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FloresPage } from './flores.page';

import { FloresPageRoutingModule } from './flores-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloresPageRoutingModule
  ],
  declarations: [FloresPage]
})
export class FloresPageModule {


  
}
