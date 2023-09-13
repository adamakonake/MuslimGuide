import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Lecteur } from '../admin/ajout-lecteur/mode';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'any'
})
export class LecteurService {

  constructor(private readonly firestore: Firestore) { }

  addLecteur(lecteur: Lecteur) {
    const data = collection(this.firestore, "Lecteur");
    console.log( "Radio");
    return addDoc(data,{
      nom: lecteur.nom,
      prenom: lecteur.prenom,
      nationalite: lecteur.nationalite,
      photo: lecteur.photo,
      
    });
    
  }
}
