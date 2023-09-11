import { Injectable } from '@angular/core';
import { Inscription } from '../admin/inscription/model';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

 
  constructor(private readonly firestore: Firestore) { }

  addInscription(inscription: Inscription) {
    const data = collection(this.firestore, "Inscription");
    console.log( "Inscription");
    return addDoc(data,{
      nom: inscription.nom,
      prenom: inscription.prenom,
      email: inscription.email,
      password: inscription.password,
      telephone: inscription.telephone,
      confirmPassword: inscription.confirmPassword,
     
      
    });
    
  }
}
