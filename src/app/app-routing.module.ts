import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'

  },
  {
    path: 'radio',
    loadChildren: () => import('./users/radio/radio.module').then( m => m.RadioPageModule)
  },
  // {
  //   path: 'liste-radio',
  //   // loadChildren: () => import('./user/liste-radio').then( m => m.ListeRadioPageModule)
  // },
  // {
  //   path: 'bousole',
  //   loadChildren: () => import('./users/bousole/bousole.module').then( m => m.BousolePageModule)
  // },
  {
    path: 'ajout-lecteur',
    loadChildren: () => import('./admin/ajout-lecteur/ajout-lecteur.module').then( m => m.AjoutLecteurPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
