import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageaffichagePage } from './pageaffichage.page';

const routes: Routes = [
  {
    path: '',
    component: PageaffichagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageaffichagePageRoutingModule {}
