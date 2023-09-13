import { Injectable } from '@angular/core';
import { Radio } from '../ajout-des-radios/mode';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
// import { Observable } from 'rxjs';
// import { returnDate } from '@mobiscroll/angular/dist/js/core/util/datetime';
import { ListRadioPage } from '../list-radio/list-radio.page';


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
  getListRadioPage(list: any) {
    const ListRadioPageRef = ListRadioPage.payload.exportVal().ref;
    this.afSG.ref(ListRadioPageRef).getDownloadURL().subscribe((ListRadioPageUrl: any) => {
      console.log(ListRadioPageUrl);
      this.ListRadioPage.push({
        name: ListRadioPage.payload.exportVal().name,
        url: ListRadioPageUrl
      });
    });
  }
}

