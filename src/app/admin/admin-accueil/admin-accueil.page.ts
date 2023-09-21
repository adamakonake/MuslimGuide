import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-admin-accueil',
  templateUrl: './admin-accueil.page.html',
  styleUrls: ['./admin-accueil.page.scss'],
})
export class AdminAccueilPage implements OnInit {

  admin : any;
  constructor(private auth:Auth, private route:Router, private activatedRoute : ActivatedRoute, private inscriptionService : InscriptionService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get("id")
      this.inscriptionService.getAdminId(id).subscribe((result:any)=>{
        this.admin = result;
        // console.log("adminacc ",this.admin)
      })
    })
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

  goToDetailAdmin(id:any) {
  this.route.navigateByUrl("profile/:id");
  }



}
