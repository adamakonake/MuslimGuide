import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
// import { Mosquee } from '../models/mosquee';
import { addDoc, deleteDoc, collection, doc, updateDoc, getDoc  } from 'firebase/firestore';

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
 
   
 
   constructor(private readonly firestore: Firestore,
     public alertController:AlertController) { }
 
 
   createMosquee(mosquee:Mosquee, horairesPrière:HorairesPrière ){
 
     // créer une référence à la collection “Mosquee” dans Firestore
    const collectionMosquee= collection(this.firestore, "Mosquee"); 
     const collectionHeure = collection(this.firestore, "Horaires")
    
     
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
   };
 
 
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
           value: mosquee.imam
         },
         {
           name: 'longitude',
           type: 'text',
           placeholder: 'modifier longitude',
           value: mosquee.longitude
         },
         {
           name: 'adresse',
           type: 'text',
           placeholder: 'modifier longitude',
           value: mosquee.latitude
         },
         {
           name: 'adresse',
           type: 'text',
           placeholder: 'Adresse de la mosquée',
           value: mosquee.horaire
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



}





