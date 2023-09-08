import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutannoncesPage } from './ajoutannonces.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutannoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutannoncesPageRoutingModule {}
