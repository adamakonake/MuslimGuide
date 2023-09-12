import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
// import { Mosquee } from '../models/mosquee';
import { addDoc, deleteDoc, collection, doc,  } from 'firebase/firestore';

import { Mosquee } from '../models/mosquee';

import { HorairesPrière } from '../models/horaires-prière';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'any'
})
export class MosqueeService {

 mosque:any[] = [];
 horairesPrière=[]

  constructor(private readonly firestore: Firestore) { }
  createMosquee(mosquee:Mosquee, HorairesPrière:HorairesPrière ){

    // créer une référence à la collection “Mosquee” dans Firestore
   const collectionMosquee= collection(this.firestore, "Mosquee"); 
    const collectionHeure = collection(this.firestore, "Horaires")
   //  ajouter un nouveau document à la collection “Mosquee” avec les propriétés spécifiées 
    // return addDoc(collectionMosquee,{
    //   nom : mosquee.nom,
    //   adresse : mosquee.adresse,
    //   longitude:mosquee.longitude,
    //   latitude:mosquee.latitude,
     
    // })
    
    return addDoc(collectionHeure,{
      fadjr:HorairesPrière.fadjr,
      zohr:HorairesPrière.zohr,
      asri:HorairesPrière.asri,
      magreb:HorairesPrière.magreb,
      isha:HorairesPrière.isha,
      djouma:HorairesPrière.djouma
    })
    .then(docRef => {

      return addDoc(collectionMosquee,{
          nom : mosquee.nom,
          adresse : mosquee.adresse,
          longitude:mosquee.longitude,
          latitude:mosquee.latitude,
         horaire : docRef
        });

      //  créer une référence à une sous-collection ‘Heures’ dans le document
      // const heuresCollection = collection(docRef, 'Heures');

      // // ajouter un nouveau document à la sous-collection ‘Heures’ avec les propriétés spécifiées
      // return addDoc(heuresCollection, {
      //   fadjr:mosquee.fadjr,
      //   zohr:mosquee.zohr,
      //   asri:mosquee.asri,
      //   magreb:mosquee.magreb,
      //   isha:mosquee.isha,
      //   djouma:mosquee.djouma
      // });
    });
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
 

  // getMosquee(): Observable<any[]> {
  //   const collectionMosquee = collection(this.firestore, 'Mosquee');
  //   return collectionData(collectionMosquee, { idField: 'id' }).pipe(
  //     switchMap(mosquees => {
  //       const horaireObservables = mosquees.map(mosquee => {
  //         const horaireQuery = query(collectionGroup(this.firestore, 'horaire'));
  //         return collectionData(horaireQuery, { idField: 'id' }).pipe(
  //           map(horaires => {
  //             if (horaires.length > 0) {
  //               mosquee['horaires'] = horaires[0];  // Utilisez la notation d'indexation ici
  //             } else {
  //               console.log('Aucun document correspondant !');
  //             }
  //             return mosquee;
  //           })
  //         );
  //       });
  //       return combineLatest(horaireObservables);
  //     })
  //   );
  // }
  
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



  

