import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListeDesSouratesPage } from './admin-liste-des-sourates.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListeDesSouratesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListeDesSouratesPageRoutingModule {}
