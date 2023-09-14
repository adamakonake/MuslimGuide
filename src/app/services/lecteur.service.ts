import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Lecteur } from '../admin/ajout-lecteur/mode';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class LecteurService {

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
}
