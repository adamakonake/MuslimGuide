import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MosqueePage } from './mosquee.page';

const routes: Routes = [
  {
    path: '',
    component: MosqueePage,
    children:[
      {
        path: 'liste-des-mosquees',
        loadChildren: () => import('../../users/liste-des-mosquees/liste-des-mosquees.module').then( m => m.ListeDesMosqueesPageModule)
      },
      {
        path: 'map-page',
        loadChildren: () => import('../../users/map-page/map-page.module').then( m => m.MapPagePageModule)
      },
      {
        path: '',
        redirectTo: '/mosquee/liste-des-mosquees',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MosqueePageRoutingModule {}
