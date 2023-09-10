import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LireCoransPage } from './lire-corans.page';

const routes: Routes = [
  {
    path: '',
    component: LireCoransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LireCoransPageRoutingModule {}
