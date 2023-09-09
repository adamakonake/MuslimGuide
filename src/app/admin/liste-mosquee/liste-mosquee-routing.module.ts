import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeMosqueePage } from './liste-mosquee.page';

const routes: Routes = [
  {
    path: '',
    component: ListeMosqueePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeMosqueePageRoutingModule {}
