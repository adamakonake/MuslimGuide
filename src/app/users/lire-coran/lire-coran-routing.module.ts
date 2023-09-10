import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LireCoranPage } from './lire-coran.page';

const routes: Routes = [
  {
    path: '',
    component: LireCoranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LireCoranPageRoutingModule {}
