import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SourateListePage } from './sourate-liste.page';

const routes: Routes = [
  {
    path: '',
    component: SourateListePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourateListePageRoutingModule {}
