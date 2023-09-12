import { Injectable } from '@angular/core';
// Import Firebase modules + environment

import { Radio } from '../ajout-des-radios/mode';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'any'
})
export class RadioService {
  
  constructor(private readonly firestore: Firestore) { }

  addRadio(radio: Radio) {
    const data = collection(this.firestore, "Radio");
    console.log( "Radio");
    return addDoc(data,{
      nom: radio.nom,
      frequence: radio.frequence,
      
      
    });
    
  }

  
}
