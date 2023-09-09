import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeLecteurPage } from './liste-lecteur.page';

const routes: Routes = [
  {
    path: '',
    component: ListeLecteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeLecteurPageRoutingModule {}
