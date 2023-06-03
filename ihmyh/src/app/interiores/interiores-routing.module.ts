import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterioresPage } from './interiores.page';

const routes: Routes = [
  {
    path: '',
    component: InterioresPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterioresPageRoutingModule {}
