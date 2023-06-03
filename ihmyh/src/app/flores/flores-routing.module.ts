import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloresPage } from './flores.page';

const routes: Routes = [
  {
    path: '',
    component: FloresPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloresPageRoutingModule {}