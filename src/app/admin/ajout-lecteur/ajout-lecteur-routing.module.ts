import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutLecteurPage } from './ajout-lecteur.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutLecteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutLecteurPageRoutingModule {}
