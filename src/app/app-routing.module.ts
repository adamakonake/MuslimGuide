import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LecteurCorantPage } from './users/lecteur-corant/lecteur-corant.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lecteur-corant',
    loadChildren: () => import('./users/lecteur-corant/lecteur-corant.module').then( m => m.LecteurCorantPageModule)
  },  {
    path: 'list-mosques',
    loadChildren: () => import('./users/list-mosques/list-mosques.module').then( m => m.ListMosquesPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./admin/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
