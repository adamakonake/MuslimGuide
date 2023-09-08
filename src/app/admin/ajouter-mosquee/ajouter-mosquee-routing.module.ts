import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterMosqueePage } from './ajouter-mosquee.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterMosqueePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterMosqueePageRoutingModule {}
