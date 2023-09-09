import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierSouratePage } from './modifier-sourate.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierSouratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierSouratePageRoutingModule {}
