import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'liste-des-mosquees',
    loadChildren: () => import('./user/liste-des-mosquees/liste-des-mosquees.module').then( m => m.ListeDesMosqueesPageModule)
  },
  {
    path: 'page-de-bienvenu',
    loadChildren: () => import('./user/page-de-bienvenu/page-de-bienvenu.module').then( m => m.PageDeBienvenuPageModule)
  },  {
    path: 'ajouter-mosquee',
    loadChildren: () => import('./admin/ajouter-mosquee/ajouter-mosquee.module').then( m => m.AjouterMosqueePageModule)
  },
  {
    path: 'ajout-des-radios',
    loadChildren: () => import('./admin/ajout-des-radios/ajout-des-radios.module').then( m => m.AjoutDesRadiosPageModule)
  },
  {
    path: 'ajouter-sourate',
    loadChildren: () => import('./admin/ajouter-sourate/ajouter-sourate.module').then( m => m.AjouterSouratePageModule)
  },
  {
    path: 'ajouter-evenement',
    loadChildren: () => import('./admin/ajouter-evenement/ajouter-evenement.module').then( m => m.AjouterEvenementPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
