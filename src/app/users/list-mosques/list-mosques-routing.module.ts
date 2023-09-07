import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMosquesPage } from './list-mosques.page';

const routes: Routes = [
  {
    path: '',
    component: ListMosquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMosquesPageRoutingModule {}
