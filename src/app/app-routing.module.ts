import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'user-liste-des-sourates', loadChildren: () => import('./user-liste-des-sourates/user-liste-des-sourates.module').then( m => m.UserListeDesSouratesPageModule)},
  {path: 'admin-connexion', loadChildren: () => import('./admin/connexion/connexion.module').then( m => m.ConnexionPageModule)},
  {path: 'admin-inscription', loadChildren:()=> import('./admin/inscription/inscription.module').then(m => m.InscriptionPageModule)},
  {path: 'admin-list-radio', loadChildren:() => import('./admin/list-radio/list-radio.module').then(m => m.ListRadioPageModule)},
  {path: 'admin-liste-sourate', loadChildren:() => import('./admin-liste-des-sourates/admin-liste-des-sourates.module').then(m => m.AdminListeDesSouratesPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
