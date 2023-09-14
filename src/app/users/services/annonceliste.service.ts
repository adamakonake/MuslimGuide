import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AnnoncelisteService {

  constructor( private firestore: Firestore) { }

  //recuperation des mosquées sur la liste annonce

  getlistmosque(){
    const document = collection(this.firestore, "Annonce");
    // this.annonces = [];
    return collectionData(document, {idField : 'id'})
  }

}
