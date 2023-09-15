import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
// import { Mosquee } from '../models/mosquee';
import { addDoc, deleteDoc, collection, doc, updateDoc  } from 'firebase/firestore';

import { Mosquee } from '../models/mosquee';
import { AlertController } from '@ionic/angular';

import { HorairesPrière } from '../models/horaires-prière';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'any'
})
export class MosqueeService {

 mosque:any[] = [];
 horairesPrière=[];
  collection: any;
 
 //mosque: Mosquee[];

//  constructor() {
//    this.mosque = [
//      {
//        id: '1234567890',
//        nom: 'Mosquée de la Prière',
//        adresse: 'Rue de la Prière, 75000 Paris',
//        latitude: 48.856700,
//        longitude: 2.345600,
//      },
//    ];
//  }
  

  constructor(private readonly firestore: Firestore,
    public alertController:AlertController) { 
      this.mosque = [
             {
               nom:this. mosque,
               adresse:this.mosque ,
               latitude: this.mosque,
               longitude: this.mosque,
             },
           ];
    }


  async createMosquee(mosquee:Mosquee, horairesPrière:HorairesPrière ){

    // créer une référence à la collection “Mosquee” dans Firestore
   const collectionMosquee= collection(this.firestore, "Mosquee"); 
    const collectionHeure = collection(this.firestore, "Horaires");
    // Vérifie si la mosquée existe déjà
    
 const existingMosque = await this.collection(this.firestore, "Mosquee")
 .where('nom', '==', mosquee.nom)
 .where('latitude', '==', mosquee.latitude)
 .where('longitude', '==', mosquee.longitude)
 .get();

if (existingMosque.docs.length > 0) {
  // La mosquée existe déjà
  return {
    error: 'La mosquée existe déjà'
  }
  throw new Error("La mosquée existe déjà");
} else {
    
    return addDoc(collectionHeure,{
      fadjr:horairesPrière.fadjr,
      zohr:horairesPrière.zohr,
      asri:horairesPrière.asri,
      magreb:horairesPrière.magreb,
      isha:horairesPrière.isha,
      djouma:horairesPrière.djouma
    })
    .then(docRef => {

      return addDoc(collectionMosquee,{
          nom : mosquee.nom,
          adresse : mosquee.adresse,
          longitude:mosquee.longitude,
          latitude:mosquee.latitude,
         horaire : docRef
        });

    });
  }}


  getMosquee(){
    const collectionMosquee = collection(this.firestore,'Mosquee');
    return collectionData(collectionMosquee,{idField:'id'})
  }


  async updateMosque(index: string, mosquee:any) {
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
           type: 'text',
           placeholder: 'modifier lagitude',
           value: mosquee.longitude
         },
         {
           name: 'adresse',
           type: 'text',
           placeholder: 'modifier longitude',
           value: mosquee.latitude
         }
       
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
         {
          text: 'Modifier',
          handler: async (data:Mosquee) => {

            console.log(this.firestore)
            const mosqueeDoc = doc(this.firestore, 'Mosquee', index);
            await updateDoc(mosqueeDoc, {
              nom: data.nom,
              adresse: data.adresse
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



  

