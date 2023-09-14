import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
// import { Mosquee } from '../models/mosquee';
import { addDoc, deleteDoc, collection, doc  } from 'firebase/firestore';

import { Mosquee } from '../models/mosquee';
import { AlertController } from '@ionic/angular';

import { HorairesPrière } from '../models/horaires-prière';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'any'
})
export class MosqueeService {

 mosque:any[] = [];
 horairesPrière=[]
  alertController: any;

  constructor(private readonly firestore: Firestore) { }
  createMosquee(mosquee:Mosquee ){
   const document= collection(this.firestore, "Mosquee");
    return addDoc(document,{
      nom : mosquee.nom,
      adresse : mosquee.adresse,
      longitude:mosquee.longitude,
      latitude:mosquee.latitude,

    }).then(docRef => {
      const heuresCollection = collection(docRef, 'Heures');
      return addDoc(heuresCollection, {
        // fadjr:mosquee.fadjr,
        // zohr:mosquee.zohr,
        // asri:mosquee.asri,
        // magreb:mosquee.magreb,
        // isha:mosquee.isha,
        // djouma:mosquee.djouma
      });
    })
;
  };

  getMosquee(){
    const collectionMosquee = collection(this.firestore,'Mosquee');
    collectionData(collectionMosquee,{idField:'id'}).subscribe((result : any[])=>{
      //const docc = doc(this.firestore,result.horaire)
      result.forEach( async mosque =>{
        const documentRef = doc(this.firestore, mosque.horaire.path)
        mosque.horaire = mosque.horaire.path
        this.mosque.push(mosque);
      })
    })
    return this.mosque;
  }


  async removeMosque(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Voulez-vous vraiment supprimer cette mosquée ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Supprimer',
          handler: async () => { // Ajoutez async ici
            const mosqueDoc = doc(this.firestore, 'Mosquee', this.mosque[index].id); // Utilisez l'ID de la mosquée
            await deleteDoc(mosqueDoc); // Supprimez le document de Firestore
            this.mosque.splice(index, 1); // Supprimez la mosquée de la liste locale
          }
        }
      ]
    });

    await alert.present();
  }

//   let horaireReference = collection/collectionMosquee/collection/collectionMosquee // Votre référence de document Firestore pour 'horaire'
// horaireReference.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Données du document:", doc.data());
//     } else {
//         console.log("Aucun document correspondant !");
//     }
// }).catch((error) => {
//     console.log("Erreur lors de la récupération du document:", error);
// });



  async deleteMosquee(mosqueeId: string) {
    const mosqueeDoc = doc(this.firestore, "Mosquee", mosqueeId);
    await deleteDoc(mosqueeDoc);
  }
}





