import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierlecteurPage } from './modifierlecteur.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierlecteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierlecteurPageRoutingModule {}
