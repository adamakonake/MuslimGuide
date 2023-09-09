import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeLecteursPage } from './liste-lecteurs.page';

const routes: Routes = [
  {
    path: '',
    component: ListeLecteursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeLecteursPageRoutingModule {}
