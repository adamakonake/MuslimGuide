import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {Lecteur} from "../ajout-lecteur/mode";
import {LecteurService} from "../../services/lecteur.service";
import {async} from "rxjs";

@Component({
  selector: 'app-modifierlecteur',
  templateUrl: './modifierlecteur.page.html',
  styleUrls: ['./modifierlecteur.page.scss'],
})
export class ModifierlecteurPage implements OnInit {
  lecteur: Lecteur;
  constructor(private lecteurService: LecteurService, private navParams: NavParams, public modalController: ModalController) {
    this.lecteur = this.navParams.get('lecteur');
  }

  ngOnInit() {
  }

  enregistrerModifications() {
    this.lecteurService.updateLecteur(this.lecteur.id, {
      nom: this.lecteur.nom,
      prenom: this.lecteur.prenom,
      nationalite: this.lecteur.nationalite,
      photo:this.lecteur.photo
    }).then(() => {
      this.modalController.dismiss();
    })
  }


    async dismissModal(){
      await this.modalController.dismiss();
  }
}
