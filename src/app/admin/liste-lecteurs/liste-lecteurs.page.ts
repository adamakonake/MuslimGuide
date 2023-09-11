import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste-lecteurs',
  templateUrl: './liste-lecteurs.page.html',
  styleUrls: ['./liste-lecteurs.page.scss'],
})
export class ListeLecteursPage implements OnInit, OnDestroy {
  imam=[{
    nom:'',
      prenom:'',
      nationalite:'',
      photo:'',
      index:0
  }]
  recherche='';
    get imanFiltres() {
        return this.imam.map((iman, index) => ({prenom: iman.prenom, nom: iman.nom,photo:iman.photo,nationalite:iman.nationalite,index})).filter(iman => iman.nom.toLowerCase().includes(this.recherche.toLowerCase()));
    }
  constructor(private route : Router) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }


    goToAjouter(){
        this.route.navigateByUrl('/ajout-lecteur')
      console.log("dffghjjk")
    }
}
