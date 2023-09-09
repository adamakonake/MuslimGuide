import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSouratePage } from './ajouter-sourate.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSouratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSouratePageRoutingModule {}
