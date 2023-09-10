import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
// import { Mosquee } from '../models/mosquee';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
// import { Observable } from 'rxjs';
import { DocumentReference } from 'firebase/firestore/lite';
import { DocumentData } from '@firebase/firestore';
import { Mosquee } from '../models/mosquee';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'any'
})
export class MosqueeService {

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
        fadjr:mosquee.fadjr,
        zohr:mosquee.zohr,
        asri:mosquee.asri,
        magreb:mosquee.magreb,
        isha:mosquee.isha,
        djouma:mosquee.djouma
      });
    })
;
  };

}

//    getSongList(): Observable<Mosquee[]> {
//     return collectionData<Mosquee>(collection(this.firestore, 'liste-des-mosquees'), {
//       idField: 'id'
//     });
// }
  

