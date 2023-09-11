import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KabaPage } from './kaba.page';

const routes: Routes = [
  {
    path: '',
    component: KabaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KabaPageRoutingModule {}
