import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListeDesSouratesPage } from './user-liste-des-sourates.page';

const routes: Routes = [
  {
    path: '',
    component: UserListeDesSouratesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListeDesSouratesPageRoutingModule {}
