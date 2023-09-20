import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Lecteur } from '../admin/ajout-lecteur/mode';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver'
import { LocalNotifications } from '@capacitor/local-notifications';
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
  sourateListAudio : any;

  //////////////////////////////////////////////// v2 //////////////////////////////////////////////////////
  imamId! : number;
  currentImamId! : number;
  isNotification = false;
  imamListInited = false;
  imams : any;
  sourateTitreList : any;
  sourateTitre = new Subject<string>;
  titre! : string;
  //////////////////////////////////////////////// v2 //////////////////////////////////////////////////////

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
    if(!this.imamListInited){
      this.http.get("https://api.quran.com/api/v4/resources/recitations").subscribe((result : any)=>{
        this.imams = result.recitations;
      });
      this.http.get("https://api.quran.com/api/v4/chapters").subscribe((result : any)=>{
        this.sourateTitreList = result.chapters;
      });
      this.sourateTitre.subscribe(result=>{
        this.titre = result;
      });

      this.imamListInited = true;
    }
    this.isInit.next(true);
  }

  ///////////////////////////////////////// V2 //////////////////////////////////////////

  initCoran(idImam : any){
    if(this.imamId != idImam){
      this.initCoranAudio(idImam);
      this.imamId = idImam;
    }
    if(this.currentImamId == this.imamId){
      this.playNext.next(this.index)
      if(this.audio.paused){
        this.playPaused.next(this.index);
      }else{
        this.playPaused.next(-1);
      }
      this.timeMax.next(this.audio.duration);
      this.currentTime.next(this.audio.currentTime);
    }
    this.isInit.next(true);
    return this.http.get("https://api.quran.com/api/v4/chapters");
  }

  playCoran(index : number){
    if(this.index != index){
      this.currentImamId = this.imamId;
      this.index = index;
      this.sourateTitre.next(this.sourateTitreList[this.index].name_simple);
      this.playNext.next(this.index);
      this.audio.src = this.sourateListAudio[index].audio_url;
      this.audio.load();
      this.audio.play();
    }else{
      if(this.currentImamId == this.imamId){
        if(this.audio.paused){
          this.audio.play()
          this.playPaused.next(-1);
        }else{
          this.audio.pause()
          this.playPaused.next(this.index);
        }
      }else{
        this.currentImamId = this.imamId;
        this.index = index;
        this.sourateTitre.next(this.sourateTitreList[this.index].name_simple);
        this.playNext.next(this.index)
        this.audio.src = this.sourateListAudio[index].audio_url;
        this.audio.load();
        this.audio.play();
      }
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

    // if(!this.isNotification){
    //   LocalNotifications.schedule({
    //     notifications : [
    //       {
    //         id : 2,
    //         title : this.imams[this.imamId].reciter_name,
    //         body : this.titre,
    //         ongoing : true,
    //         autoCancel : false,
    //       }
    //     ]
    //   })
    //   this.isNotification = true;
    // }
    
  }
  
    
  ///////////////////////////////////////// V2 //////////////////////////////////////////

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
