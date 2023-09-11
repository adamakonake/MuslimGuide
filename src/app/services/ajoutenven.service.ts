import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Even } from '../users/models/even';


@Injectable({
  providedIn: 'any'
})
export class AjoutenvenService {

  constructor( private readonly firestore: Firestore) { }

  ajoutenven (evenement : Even){
    const document= collection(this.firestore, "Even");
    return addDoc(document,{
      type : evenement.type,
      lieu : evenement.lieu,
      date : evenement.date,
      heure : evenement.heure,
      description: evenement.description
    })
  }


}
