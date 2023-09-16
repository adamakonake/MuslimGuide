import { Injectable } from '@angular/core';
import {collectionData, Firestore} from '@angular/fire/firestore';
import { Lecteur } from '../admin/ajout-lecteur/mode';
import {addDoc, collection, deleteDoc, doc, updateDoc} from 'firebase/firestore';
import {map, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class LecteurService {
  lecteur:any[]=[];

  playEnd = new Subject<number>;
  audio = new Audio();
  index! : number;

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

  playQuran(index : number, source : string){
    if(this.index == index){
      if(this.audio.paused)
        this.audio.play()
      else
        this.audio.pause()
    }else{
      this.index = index;
      this.audio.src = source;
      this.audio.load();
      this.audio.play();
    }

    this.audio.onended = (e) =>{
      this.playEnd.next(this.index);
    }

    // if(index == this.isPlay ){
    //   this.audio.pause()
    // }else{
    //   if(this.isPlay == null || undefined){
    //     this.isPlay = index;
    //     this.audio = new Audio(this.sourateAudioList[index].audio_url);
    //     this.audio.play();
    //   }else{
    //     this.isPlay = index;
    //     this.audio.src = this.sourateAudioList[index].audio_url;
    //     this.audio.load();
    //     this.audio.play();
    //   }
    // }
  }
// Amadou Touré
  getLecteur(){
    if (this.lecteur.length > 0) {
      return of(this.lecteur);
    }
    const data = collection(this.firestore, "Lecteur");
    return collectionData(data, { idField: 'id' }).pipe(
      map((resultat: any[]) => {
        this.lecteur = resultat.map(lecteur => ({ id: lecteur.id, ...lecteur }));
        return this.lecteur;
      })
    );
  }

  deleteLecteur(lecteurId: string) {
    const data = doc(this.firestore, "Lecteur", lecteurId);
    return deleteDoc(data);
  }
  updateLecteur(lecteurId: string, lecteur: Partial<Lecteur>) {
    const data = doc(this.firestore, "Lecteur", lecteurId);
    return updateDoc(data,lecteur);
  }

}
