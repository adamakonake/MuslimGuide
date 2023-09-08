import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutDesRadiosPage } from './ajout-des-radios.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutDesRadiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutDesRadiosPageRoutingModule {}
