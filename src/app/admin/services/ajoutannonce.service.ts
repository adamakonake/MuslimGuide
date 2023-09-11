import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Annonce } from 'src/app/users/models/annonce';


@Injectable({
  providedIn: 'any'
})
export class AjoutannonceService {

  constructor( private readonly firestore: Firestore) { }
  addannonce (annonce: Annonce){
    const document= collection(this.firestore, "Annonce");
    return addDoc(document,{
      date : annonce.date,
      nomMosquee : annonce.nomMosquee,
      heurePreche : annonce.heurePreche,
      heureTabsir : annonce.heureTabsir
    })
  }
}
