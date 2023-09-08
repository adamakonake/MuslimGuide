import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterEvenementPage } from './ajouter-evenement.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterEvenementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterEvenementPageRoutingModule {}
