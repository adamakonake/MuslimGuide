import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeannoncesPage } from './listeannonces.page';

const routes: Routes = [
  {
    path: '',
    component: ListeannoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeannoncesPageRoutingModule {}
