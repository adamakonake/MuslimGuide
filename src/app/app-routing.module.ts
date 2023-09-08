import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./users/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'hidjri',
    loadChildren: () => import('./users/hidjri/hidjri.module').then( m => m.HidjriPageModule)
  },
  {
    path: 'admin-accueil',
    loadChildren: () => import('./admin/admin-accueil/admin-accueil.module').then( m => m.AdminAccueilPageModule)
  },
  {
    path: 'chapelet',
    loadChildren: () => import('./users/chapelet/chapelet.module').then( m => m.ChapeletPageModule)
  },
  {
    path: 'lire-coran',
    loadChildren: () => import('./users/lire-coran/lire-coran.module').then( m => m.LireCoranPageModule)
  },
  {
    path: 'details-mosquees',
    loadChildren: () => import('./users/details-mosquees/details-mosquees.module').then( m => m.DetailsMosqueesPageModule)
  },
  {
    path: 'liste-evenement',
    loadChildren: () => import('./admin/liste-evenement/liste-evenement.module').then( m => m.ListeEvenementPageModule)
  },
  {
    path: 'lire-corans',
    loadChildren: () => import('./admin/lire-corans/lire-corans.module').then( m => m.LireCoransPageModule)
  },
  {
    path: 'liste-mosquee',
    loadChildren: () => import('./admin/liste-mosquee/liste-mosquee.module').then( m => m.ListeMosqueePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
