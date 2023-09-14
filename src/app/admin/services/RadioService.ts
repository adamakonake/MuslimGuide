import { Injectable } from '@angular/core';
// import { Radio } from '../ajout-des-radios/mode';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
// import { Observable } from 'rxjs';
// import { returnDate } from '@mobiscroll/angular/dist/js/core/util/datetime';
import { ListRadioPage } from '../list-radio/list-radio.page';
import { Radio } from '../list-radio/mode';


@Injectable({
  providedIn: 'any'
})
export class RadioService {
  afSG: any;
  ListRadioPage: any;

  constructor(private readonly firestore: Firestore) { }

  addRadio(radio: Radio) {
    const data = collection(this.firestore, "Radio");
    console.log("Radio");
    return addDoc(data, {
      nom: radio.nom,
      frequence: radio.frequence,



    });


  }
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //pour recupere la liste de radio par TypeScripte
  getRadio(){
    const data = collection(this.firestore,'Radio');
    return collectionData(data,{idField:'id'})
  }

}

