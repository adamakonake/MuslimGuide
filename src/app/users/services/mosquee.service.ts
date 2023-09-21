import { Injectable } from '@angular/core';
import { Firestore, collectionData, docSnapshots } from '@angular/fire/firestore';
// import { Mosquee } from '../models/mosquee';
import { addDoc, deleteDoc, collection, doc, updateDoc, getDoc, query, getDocs, where } from 'firebase/firestore';

import { Mosquee } from '../models/mosquee';
import { AlertController } from '@ionic/angular';

import { HorairesPrière } from '../models/horaires-prière';
import { map } from 'rxjs';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'any'
})
export class MosqueeService {


  mosque: any[] = [];
  horairesPrière = [];

  horaire: any;
  collection: any;



  constructor(private readonly firestore: Firestore,
    public alertController: AlertController) { }

  async createMosquee(mosquee: Mosquee, horairesPrière: HorairesPrière) {

    // // créer une référence à la collection “Mosquee” et "Horaires" dans Firestore
    // const collectionMosquee = collection(this.firestore, "Mosquee");
    // const collectionHeure = collection(this.firestore, "Horaires");
    // Vérifie si la mosquée existe déjà

    const q = query(collection(this.firestore, 'Mosque'),
      where('nom', '==', mosquee.nom),
      where('latitude', '==', mosquee.latitude),
      where('longitude', '==', mosquee.longitude));

    const querySnapShoot = await getDocs(q);
    // const existingMosque = await this.collection(this.firestore, "Mosquee")
    //   .where('nom', '==', mosquee.nom)
    //   .where('latitude', '==', mosquee.latitude)
    //   .where('longitude', '==', mosquee.longitude)
    //   .get();

    if (querySnapShoot.empty) {
      console.log('je suis heure')
      const collectionHeure = collection(this.firestore, "Horaires");
      return addDoc(collectionHeure, {
        fadjr: horairesPrière.fadjr,
        zohr: horairesPrière.zohr,
        asri: horairesPrière.asri,
        magreb: horairesPrière.magreb,
        isha: horairesPrière.isha,
        djouma: horairesPrière.djouma
      })
      
        .then(docRef => {
          console.log('je suis Mosquee')
          const collectionMosquee = collection(this.firestore, "Mosquee");
          return addDoc(collectionMosquee, {
            nom: mosquee.nom,
            adresse: mosquee.adresse,
            longitude: mosquee.longitude,
            latitude: mosquee.latitude,
            horaire: docRef,
            imam: mosquee.imam
          });

        });
      // La mosquée existe déjà
      // throw new Error("La mosquée existe déjà");
      
    } else {
      return 'Error';
      
    }
  }


  getMosquee() {
    const collectionMosquee = collection(this.firestore, 'Mosquee');
    return collectionData(collectionMosquee, { idField: 'id' })
  }

  getMosqueeById(mosqueeId: any) {
    const mosqueeDocRef = doc(this.firestore, "Mosquee", mosqueeId);
    return docSnapshots(mosqueeDocRef).pipe(map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    }))
  }

  getHoraireById(horaireId: any) {
    const horaireDocRef = doc(this.firestore, horaireId);
    return docSnapshots(horaireDocRef).pipe(map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data }
    }))
  }



  async updateMosque(index: string, mosquee: any) {
    console.log("heure " + mosquee.horaire.path)
    this.getHoraireById(mosquee.horaire.path).subscribe((result) => {
      this.horaire = result;
    })
    const alert = await this.alertController.create({
      header: 'Modifier la mosquée',
      inputs: [
        {
          name: 'nom',
          type: 'text',
          placeholder: 'Nom de la mosquée',
          value: mosquee.nom
        },
        {
          name: 'adresse',
          type: 'text',
          placeholder: 'Adresse de la mosquée',
          value: mosquee.adresse
        },
        {
          name: 'longitude',
          type: 'number',
          placeholder: 'modifier lagitude',
          value: mosquee.longitude,
        },
        {
          name: 'latitude',
          type: 'number',
          placeholder: 'modifier longitude',
          value: mosquee.latitude
        },

        {
          name: 'fadjr',
          type: 'time',
          placeholder: 'fadjr',
          value: this.horaire.fadjr
        },
        {
          name: 'zohr',
          type: 'time',
          placeholder: 'zohr',
          value: this.horaire.zohr
        },
        {
          name: 'asri',
          type: 'time',
          placeholder: 'modifier ',
          value: this.horaire.asri,
        },
        {
          name: 'magreb',
          type: 'time',
          placeholder: 'modifier ',
          value: this.horaire.magreb
        },
        {
          name: 'isha',
          type: 'time',
          placeholder: 'modifier ',
          value: this.horaire.isha,
        },
        {
          name: 'djouma',
          type: 'time',
          placeholder: 'modifier ',
          value: this.horaire.djouma
        }

      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Modifier',
          handler: async (data: any) => {

            console.log(this.firestore)
            const mosqueeDoc = doc(this.firestore, 'Mosquee', index)
            await updateDoc(mosqueeDoc, {
              nom: data.nom,
              adresse: data.adresse,
              longitude: data.longitude,
              latitude: data.latitude,
            });

            console.log(this.firestore)
            const heureDoc = doc(this.firestore, mosquee.horaire.path)
            await updateDoc(heureDoc, {
              fadjr: data.fadjr,
              zohr: data.zohr,
              asri: data.asri,
              magreb: data.magreb,
              isha: data.isha,
              djouma: data.djouma
            });

          }
        }
      ]
    });
    await alert.present();
  }


  async removeMosque(index: string) {
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
            const radioDoc = doc(this.firestore, 'Mosquee', index); // Utilisez l'ID de la radio
            await deleteDoc(radioDoc); // Supprimez le document de Firestore
            //this.radio.splice(index, 1); // Supprimez la radio de la liste locale
            console.log("azertyuiop")
          }
        }
      ]
    });

    await alert.present();
  }


}



