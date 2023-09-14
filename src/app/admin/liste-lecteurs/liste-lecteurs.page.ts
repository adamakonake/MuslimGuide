import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LecteurService} from "../../services/lecteur.service";
import {Lecteur} from "../ajout-lecteur/mode";
import {ModalController} from "@ionic/angular";
import {ModifierlecteurPage} from "../modifierlecteur/modifierlecteur.page";

@Component({
  selector: 'app-liste-lecteurs',
  templateUrl: './liste-lecteurs.page.html',
  styleUrls: ['./liste-lecteurs.page.scss'],
})
export class ListeLecteursPage implements OnInit {

  lecteurs:Lecteur[]=[];
  recherche = '';

  constructor(private route: Router, private readonly lecteurService: LecteurService, private modalController: ModalController) {
  }
  ngOnInit() {
    this.refreshLecteurs();
  }

  refreshLecteurs() {
      this.lecteurService.getLecteur().subscribe((lecteurs: Lecteur[]) => {
          this.lecteurs = lecteurs;
      });
  }


  goToAjouter() {
    this.route.navigateByUrl('/ajout-lecteur')
  }

  lecteurFiltre(lecteur: Lecteur): boolean {
    const rechercheLowerCase = this.recherche.toLowerCase();
    return (
      lecteur.nom.toLowerCase().includes(rechercheLowerCase) ||
      lecteur.prenom.toLowerCase().includes(rechercheLowerCase) ||
      lecteur.nationalite.toLowerCase().includes(rechercheLowerCase)
    );
  }

  deleteLecteur(lecteur: Lecteur) {
    this.lecteurService.deleteLecteur(lecteur.id).then(() => {
      this.lecteurs = this.lecteurs.filter((l: Lecteur) => l !== lecteur);
    }).catch((error) => {
      console.error("Error deleting lecteur: ", error);
    });
  }


  async modifier(lecteur: Lecteur) {
    const modal = await this.modalController.create({
      component: ModifierlecteurPage,
      componentProps: {
        lecteur: lecteur
      }
    });
    modal.onWillDismiss().then(() => {
      this.refreshLecteurs(); // Rafraîchir la liste après la modification
    });
    await modal.present();
  }

}
