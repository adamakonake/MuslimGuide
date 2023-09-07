import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecteurCorantPage } from './lecteur-corant.page';

const routes: Routes = [
  {
    path: '',
    component: LecteurCorantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecteurCorantPageRoutingModule {}
