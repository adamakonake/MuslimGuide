import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HidjriPage } from './hidjri.page';

const routes: Routes = [
  {
    path: '',
    component: HidjriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HidjriPageRoutingModule {}
