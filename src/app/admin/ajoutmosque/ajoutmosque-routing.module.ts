import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutmosquePage } from './ajoutmosque.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutmosquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutmosquePageRoutingModule {}
