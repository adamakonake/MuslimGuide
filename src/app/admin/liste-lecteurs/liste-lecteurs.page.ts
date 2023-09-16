import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LecteurService} from "../../services/lecteur.service";
import {Lecteur} from "../ajout-lecteur/mode";
import {AlertController, ModalController} from "@ionic/angular";

@Component({
  selector: 'app-liste-lecteurs',
  templateUrl: './liste-lecteurs.page.html',
  styleUrls: ['./liste-lecteurs.page.scss'],
})
export class ListeLecteursPage implements OnInit {

  lecteurs:Lecteur[]=[];
  recherche = '';

  constructor(private route: Router, private readonly lecteurService: LecteurService, private modalController: ModalController,private alertController: AlertController) {
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
    const result =
        lecteur.nom.toLowerCase().includes(rechercheLowerCase) ||
        lecteur.prenom.toLowerCase().includes(rechercheLowerCase) ||
        lecteur.nationalite.toLowerCase().includes(rechercheLowerCase);

    console.log(`Lecteur: ${lecteur.nom}, Filtre: ${rechercheLowerCase}, Résultat: ${result}`);

    return result;
  }


  async deleteLecteur(lecteur: Lecteur) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Modification annulée');
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.confirmer(lecteur); // Appeler la fonction de confirmation
          }
        }
      ]
    });

    await alert.present();
  }

  confirmer(lecteur: Lecteur) {
    const lecteurId = lecteur.id;
    if (lecteurId) {
      this.lecteurService.deleteLecteur(lecteurId).then(() => {
        this.lecteurs = this.lecteurs.filter((l: Lecteur) => l !== lecteur);
      }).catch((error) => {
        console.error("Error deleting lecteur: ", error);
      });
    } else {
      console.error("Lecteur ID is undefined");
    }
  }




  async modifier(lecteur: Lecteur) {
    const alert = await this.alertController.create({
      header: 'Modifier Lecteur',
      inputs: [
        {
          name: 'Nom',
          type: 'text',
          placeholder: 'Nom',
          value: lecteur.nom
        },
        {
          name: 'Prénom',
          type: 'text',
          placeholder: 'Prénom',
          value: lecteur.prenom
        },
        {
          name: 'nationalite',
          type: 'text',
          placeholder: 'Nationalité',
          value: lecteur.nationalite
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Modification annulée');
          }
        },
        {
          text: 'Enregistrer',
          handler: (data) => {
            this.enregistrerModifications(lecteur, data);
          }
        }
      ]
    });

    await alert.present();
  }
enregistrerModifications(lecteur: Lecteur, data: any) {
  const lecteurId = lecteur.id;
  if(lecteurId){
    this.lecteurService.updateLecteur(lecteurId, {
      nom: data.Nom,
      prenom: data.Prénom,
      nationalite: data.nationalite
      // Ne pas inclure 'photo' dans l'objet de mise à jour
    }).then(() => {
      console.log('Modification enregistrée avec succès');
    }).catch((error) => {
      console.error("Error updating lecteur: ", error);
    });
  } else {
    console.error("Lecteur ID is undefined");
  }
}
}
