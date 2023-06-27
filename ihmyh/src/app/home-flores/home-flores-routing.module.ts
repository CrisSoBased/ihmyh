import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFloresPage } from './home-flores.page';

const routes: Routes = [
  {
    path: '',
    component: HomeFloresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeFloresPageRoutingModule {}
