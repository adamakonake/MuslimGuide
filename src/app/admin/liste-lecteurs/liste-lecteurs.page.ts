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

  lecteurs: Lecteur[] = []
  recherche = '';

  constructor(private route: Router, private readonly lecteurService: LecteurService, private modalController: ModalController) {
  }

  ngOnInit() {
    this.lecteurs = this.lecteurService.getLecteur()
  }

  goToAjouter() {
    this.route.navigateByUrl('/ajout-lecteur')
  }

  lecteurFiltre(lecteur: Lecteur): boolean {
    return (
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

  updateLecteur(lecteurId: string, updatedData: Partial<Lecteur>) {
    this.lecteurService.updateLecteur(lecteurId, updatedData)
      .then(() => {
      })
      .catch(error => {
        console.error("Error updating lecteur: ", error);
      });
  }
    async modifier(lecteur: Lecteur) {
        const modal = await this.modalController.create({
            component: ModifierlecteurPage,
            componentProps: {
                lecteur: lecteur
            }
        });
        await modal.present();
    }

}
