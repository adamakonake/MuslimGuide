import { Injectable } from '@angular/core';
// Import Firebase modules + environment

import { Radio } from '../ajout-des-radios/mode';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { async } from '@angular/core/testing';
import { deleteDoc, updateDoc } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'any'
})
export class RadioService {
  radio: any;
 
  // radio:any=[];

  constructor(private readonly firestore: Firestore, public alertController: AlertController
    ) { }

  addRadio(radio: Radio) {
    const data = collection(this.firestore, "Radio");
    console.log( "Radio");
    return addDoc(data,{
      nom: radio.nom,
      frequence: radio.frequence,
      
      
    });
    
  }

  getRadio(){
  const data = collection(this.firestore,'Radio');
  return collectionData(data, {idField:'id'})//.subscribe((result:any[])=>{
  // result.forEach(async radio=>{
  //   radio=radio
  //   this.radio.push(radio)
  // })
  // })
  // return this.radio
  }

   // Importez deleteDoc

async removeRadio(index: string, ) {
  const alert = await this.alertController.create({
    header: 'Confirmation',
    message: 'Voulez-vous vraiment supprimer cette radio ?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'secondary',
      }, {
        text: 'Supprimer',
        handler: async () => { // Ajoutez async ici
          const radioDoc = doc(this.firestore, 'Radio', index); // Utilisez l'ID de la radio
          await deleteDoc(radioDoc); // Supprimez le document de Firestore
          //this.radio.splice(index, 1); // Supprimez la radio de la liste locale
          console.log("azertyuiop")
        }
      }
    ]
  });
  await alert.present();
}

// async updateRadio(index: string) {
//   const radioDoc = doc(this.firestore, 'Radio', index); // Utilisez l'ID de la radio
//   await updateDoc(radioDoc, {
//     nom: '',
//     frequence: 0
//   }); // Mettez à jour le document dans Firestore avec les nouvelles valeurs
// }

async updateRadio(index: string, radio:any) {
  const alert = await this.alertController.create({
    header: 'Modifier la radio',
    inputs: [
      {
        name: 'nom',
        type: 'text',
        placeholder: 'Nom de la radio',
        value: radio.nom // Pré-remplir le champ avec le nom de la radio actuelle
      },
      {
        name: 'frequence',
        type: 'text',
        placeholder: 'Fréquence de la radio',
        value: radio.frequence //Pré-remplir le champ avec la fréquence de la radio actuelle
      }
    ],
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel' // Bouton pour annuler l'opération
      }, {
        text: 'Modifier',
        handler: async (data) => {
          ////this.radio[index].nom = data.nom; // Mettre à jour le nom de la radio
          //this.radio[index].frequence = data.frequence;  // Mettre à jour la frequence de la radio
          
        console.log(this.firestore)
          const radioDoc = doc(this.firestore, 'Radio', index); // Utilisez l'ID de la radio
          await updateDoc(radioDoc, {
          nom: data.nom,
          frequence: data.frequence
        });
        }
      }
    ]
  });
  await alert.present();
}

}
