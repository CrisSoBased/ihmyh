import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesejadosPage } from './desejados.page';

const routes: Routes = [
  {
    path: '',
    component: DesejadosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesejadosPageRoutingModule {}