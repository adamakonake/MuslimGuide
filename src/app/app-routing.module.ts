import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'hidjri',
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
