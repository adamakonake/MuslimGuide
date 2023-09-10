import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeDesMosqueesPage } from './liste-des-mosquees.page';

const routes: Routes = [
  {
    path: '',
    component: ListeDesMosqueesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeDesMosqueesPageRoutingModule {}
