import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Lecteur } from '../admin/ajout-lecteur/mode';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver'
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'any'
})
export class LecteurService {

  playPaused = new Subject<number>;
  isInit = new Subject<boolean>;
  playNext = new Subject<number>;
  currentTime = new Subject<number>;
  timeMax = new Subject<number>;
  audio = new Audio();
  index! : number;
  sourateListAudio : any

  constructor(private readonly firestore: Firestore, private http : HttpClient) { }

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

  initCoranAudio(id : any){
    this.http.get("https://api.quran.com/api/v4/chapter_recitations/"+id).subscribe((result : any)=>{
        this.sourateListAudio = result.audio_files;
    });
    this.isInit.next(true);
  }

  playQuran(index : number){
    if(this.index == index){
      if(this.audio.paused){
        this.audio.play()
        this.playPaused.next(-1);
      }else{
        this.audio.pause()
        this.playPaused.next(this.index);
      }
    }else{
      this.index = index;
      this.playNext.next(this.index)
      this.audio.src = this.sourateListAudio[index].audio_url;
      this.audio.load();
      this.audio.play();
    }

    this.audio.onended = (e) =>{
      if(this.index < this.sourateListAudio.length){
        this.audio.src = this.sourateListAudio[index+1].audio_url;
        this.audio.load();
        this.audio.play();
        this.index++
        this.playNext.next(this.index);
      }else{
        this.playPaused.next(this.index);
      }
    }
    this.audio.onloadeddata = (e)=>{
      this.timeMax.next(this.audio.duration);
    }
    this.audio.ontimeupdate = (e)=>{
      this.currentTime.next(this.audio.currentTime);
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

  goToNext(){
    if(this.index < this.sourateListAudio.length){
      this.audio.src = this.sourateListAudio[this.index+1].audio_url;
      this.audio.load();
      this.audio.play();
      this.index++
      this.playNext.next(this.index);
    }else{
      this.playPaused.next(this.index);
    }
  }

  goToPrev(){
    if(this.index > 0 ){
      this.audio.src = this.sourateListAudio[this.index-1].audio_url;
      this.audio.load();
      this.audio.play();
      this.index--
      this.playNext.next(this.index);
    }else{
      this.playPaused.next(this.index);
    }
  }

  download(index : number,nom : string){

    //Filesystem.downloadFile(this.sourateListAudio[index].audio_url)

    saveAs(this.sourateListAudio[index].audio_url,nom)
  }
}
