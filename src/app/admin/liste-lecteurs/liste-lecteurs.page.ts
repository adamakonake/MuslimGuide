import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LecteurService} from "../../services/lecteur.service";
import {Lecteur} from "../ajout-lecteur/mode";

@Component({
  selector: 'app-liste-lecteurs',
  templateUrl: './liste-lecteurs.page.html',
  styleUrls: ['./liste-lecteurs.page.scss'],
})
export class ListeLecteursPage implements OnInit{

  lecteurs:Lecteur[]= []
  recherche= '';
  constructor(private route : Router, private readonly lecteurService:LecteurService) {
  }
    ngOnInit() {
    this.lecteurs = this.lecteurService.getLecteur()
  }
    goToAjouter(){
        this.route.navigateByUrl('/ajout-lecteur')
    }
  filterLecteur(){
    this.lecteurs = this.lecteurService.getLecteur()
        .filter(lecteur =>
            lecteur.nom.includes(this.recherche) ||
            lecteur.prenom.includes(this.recherche) ||
            lecteur.nationalite.includes(this.recherche)
        );
  }
  deleteLecteur(lecteur: Lecteur) {
    this.lecteurService.deleteLecteur(lecteur.id).then(() => {
      this.lecteurs = this.lecteurs.filter(l => l !== lecteur);
    }).catch((error) => {
      console.error("Error deleting lecteur: ", error);
    });
  }



}
