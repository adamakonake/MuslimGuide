import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'page-de-bienvenu',
    pathMatch: 'full'
  },
  // {
  //   path: 'annonce',
  //   loadChildren: () => import('./users/annonce/annonce.module').then( m => m.AnnoncePageModule)
  // },
  {
    path: 'pageaffichage/:numero',
    loadChildren: () => import('./users/pageaffichage/pageaffichage.module').then( m => m.PageaffichagePageModule)
  },
  {
    path: 'ajoutannonces',
    loadChildren: () => import('./admin/ajoutannonces/ajoutannonces.module').then( m => m.AjoutannoncesPageModule)
  },
  {
    path: 'ajoutmosque',
    loadChildren: () => import('./admin/ajoutmosque/ajoutmosque.module').then( m => m.AjoutmosquePageModule)
  },
  {
    path: 'listeannonces',
    loadChildren: () => import('./admin/listeannonces/listeannonces.module').then( m => m.ListeannoncesPageModule)
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
    path: 'admin-accueil/:id',
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
    path: 'liste-des-mosquees',
    loadChildren: () => import('./users/liste-des-mosquees/liste-des-mosquees.module').then( m => m.ListeDesMosqueesPageModule)
  },
  {
    path: 'liste-mosquee',
    loadChildren: () => import('./admin/liste-mosquee/liste-mosquee.module').then( m => m.ListeMosqueePageModule)
  },
  {
    path: 'page-de-bienvenu',
    loadChildren: () => import('./users/page-de-bienvenu/page-de-bienvenu.module').then( m => m.PageDeBienvenuPageModule)
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
  {
    path: 'lecteur-corant',
    loadChildren: () => import('./users/lecteur-corant/lecteur-corant.module').then( m => m.LecteurCorantPageModule)
  },
  {
    path: 'list-mosques',
    loadChildren: () => import('./users/list-mosques/list-mosques.module').then( m => m.ListMosquesPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./admin/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./admin/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'list-radio',
    loadChildren: () => import('./admin/list-radio/list-radio.module').then( m => m.ListRadioPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./users/radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'ajout-lecteur',
    loadChildren: () => import('./admin/ajout-lecteur/ajout-lecteur.module').then( m => m.AjoutLecteurPageModule)
  },
  {
    path: 'liste-lecteurs',
    loadChildren: () => import('./admin/liste-lecteurs/liste-lecteurs.module').then( m => m.ListeLecteursPageModule)
  },
  {
    path: 'liste-lecteur',
    loadChildren: () => import('./users/liste-lecteur/liste-lecteur.module').then( m => m.ListeLecteurPageModule)
  },
  {path: 'user-liste-des-sourates/:identifient', loadChildren: () => import('./users/user-liste-des-sourates/user-liste-des-sourates.module').then( m => m.UserListeDesSouratesPageModule)},
  {path: 'admin-liste-sourate', loadChildren:() => import('./admin/admin-liste-des-sourates/admin-liste-des-sourates.module').then(m => m.AdminListeDesSouratesPageModule)},
  {
    path: 'map-page',
    loadChildren: () => import('./users/map-page/map-page.module').then( m => m.MapPagePageModule)
  },
  {
    path: 'kaba',
    loadChildren: () => import('./users/kaba/kaba.module').then( m => m.KabaPageModule)
  },
  {
    path: 'sourate-liste',
    loadChildren: () => import('./users/sourate-liste/sourate-liste.module').then( m => m.SourateListePageModule)
  },
  {
    path: 'liste-mosquee',
    loadChildren: () => import('./admin/liste-mosquee/liste-mosquee.module').then( m => m.ListeMosqueePageModule)
  },
  {
    path: 'mosquee',
    loadChildren: () => import('./users/mosquee/mosquee.module').then( m => m.MosqueePageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./admin/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'update-email',
    loadChildren: () => import('./admin/update-email/update-email.module').then( m => m.UpdateEmailPageModule)
  },
  {
    path: 'update-password',
    loadChildren: () => import('./admin/update-password/update-password.module').then( m => m.UpdatePasswordPageModule)
  },
  {
    path: 'evenements',
    loadChildren: () => import('./users/evenements/evenements.module').then( m => m.EvenementsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
