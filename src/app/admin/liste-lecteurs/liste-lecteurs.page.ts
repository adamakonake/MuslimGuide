import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LecteurService} from "../../services/lecteur.service";
import {Lecteur} from "../ajout-lecteur/mode";

@Component({
  selector: 'app-liste-lecteurs',
  templateUrl: './liste-lecteurs.page.html',
  styleUrls: ['./liste-lecteurs.page.scss'],
})
export class ListeLecteursPage implements OnInit{
  lecteur: Lecteur[]=[];
  recherche= '';

  constructor(private route : Router, private readonly lecteurService:LecteurService) {
  }
    chercheLecteur() {
        this.lecteur = this.lecteurService.getLecteur().map((lecteur, index) => {
            return {
                nom: lecteur.nom,
                prenom: lecteur.prenom,
                nationalite: lecteur.nationalite,
                photo: lecteur.photo,
            };
        }).filter((lecteur) => {
            return (lecteur.nom.includes(this.recherche) || lecteur.prenom.includes(this.recherche) || lecteur.nationalite.includes(this.recherche));
        });
    }
    ngOnInit() {
    this.lecteur = this.lecteurService.getLecteur()
  }
    goToAjouter(){
        this.route.navigateByUrl('/ajout-lecteur')
    }



}
