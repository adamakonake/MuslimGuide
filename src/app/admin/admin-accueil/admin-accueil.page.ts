import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-accueil',
  templateUrl: './admin-accueil.page.html',
  styleUrls: ['./admin-accueil.page.scss'],
})
export class AdminAccueilPage implements OnInit {

  constructor(private auth:Auth, private route:Router) { }

  ngOnInit() {
  }

  goToListMosque(){
    this.route.navigateByUrl("/liste-mosquee")
  }

  goToListAnnonce(){
    this.route.navigateByUrl("/listeannonces")
  }

  goToListRadio(){
    this.route.navigateByUrl("/list-radio")
  }

  goToListSourate(){
    this.route.navigateByUrl("/liste-lecteurs")
  }

  goToInscription(){
    this.route.navigateByUrl("/inscription")
  }

  logout(){
    this.auth.signOut();
    this.route.navigateByUrl("connexion");
  }



}
