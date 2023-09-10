import { Injectable } from '@angular/core';
// Import Firebase modules + environment
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Radio } from '../ajout-des-radios/mode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  // radioRefs: AngularFireList<any>;
  // radioRef: AngularFireObject<any>;
  // radio: Radio [] = [];
  

  // constructor(private db: AngularFireDatabase) { 
    
  // this.radioRefs = this.db.list('radios');
  //   this.radioRef = this.db.object('radios');
  //   console.log( "radioRef"+" :"+this.radioRefs.query);
  // }
  // // creer radio ref
  // addRadio(radio: Radio){
  //   this.radioRefs.push({radio:radio.nom,
  //   frequence:radio.frequence})
  //   .then((result) => {
  //     console.log('Radio trover avec succès.', result);
  //   })
  //   .catch((error) => {
  //     console.error('Erreur lors de l\'ajout de la radio :', error);
  //   });
  // }

  // getRadios(){
  //   this.radioRef = this.db.object('/radios');
  //   return this.radioRef;
  // }

  // getlist(){
  //   return this.radioRefs;
  // }
  
}
