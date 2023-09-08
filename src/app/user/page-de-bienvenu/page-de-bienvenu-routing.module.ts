import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDeBienvenuPage } from './page-de-bienvenu.page';

const routes: Routes = [
  {
    path: '',
    component: PageDeBienvenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDeBienvenuPageRoutingModule {}
