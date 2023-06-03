import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformatePage } from './informate.page';

const routes: Routes = [
  {
    path: '',
    component: InformatePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformatePageRoutingModule {}