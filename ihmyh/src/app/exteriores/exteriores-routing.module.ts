import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExterioresPage } from './exteriores.page';

const routes: Routes = [
  {
    path: '',
    component: ExterioresPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExteriresPageRoutingModule {}
