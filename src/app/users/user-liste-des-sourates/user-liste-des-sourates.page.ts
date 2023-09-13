import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LecteurService } from 'src/app/services/lecteur.service';

@Component({
  selector: 'app-user-liste-des-sourates',
  templateUrl: './user-liste-des-sourates.page.html',
  styleUrls: ['./user-liste-des-sourates.page.scss'],
})
export class UserListeDesSouratesPage implements OnInit {
  sourates=[
    { nom: 'Al-Fatiha', isPlaying: false,numeroSourate:1 },
    { nom: 'Al-Baqara', isPlaying: false,numeroSourate:2},
    { nom: 'Al-Imran', isPlaying: false,numeroSourate:3 },
    { nom: 'An-Nisa', isPlaying: false,numeroSourate:4 },
    { nom: 'Al-Maaida', isPlaying: false ,numeroSourate:5},
    { nom: 'Al-An`am', isPlaying: false ,numeroSourate:6},
    { nom: 'Al-A`raf', isPlaying: false,numeroSourate:7 },
   { nom: 'Al-Anfal', isPlaying: false,numeroSourate:8 },
    { nom: 'At-Tawba', isPlaying: false,numeroSourate:9 },
    { nom: 'Yunus', isPlaying: false,numeroSourate:10 },
    { nom: 'Hud', isPlaying: false,numeroSourate:11 },
    { nom: 'Yusuf', isPlaying: false,numeroSourate:12 },
    { nom: 'Ibrahim', isPlaying: false,numeroSourate:13 },
    { nom: 'Al-Hijr', isPlaying: false,numeroSourate:14 },
    { nom: 'An-Nahl', isPlaying: false,numeroSourate:15 },
    { nom: 'Al-Isra', isPlaying: false,numeroSourate:16 },
    { nom: 'Al-Kahf', isPlaying: false,numeroSourate:17 }/*
    { nom: 'Maryam', isPlaying: false },
    { nom: 'Ta-Ha', isPlaying: false },
    { nom: 'Al-Anbiya', isPlaying: false },
    { nom: 'Al-Hajj', isPlaying: false },
    { nom: 'Al-Mu’minun', isPlaying: false },
    { nom: 'An-Nur', isPlaying: false },
    { nom: 'Al-Furqan', isPlaying: false },
    { nom: 'Ash-Shu`ara', isPlaying: false },
    { nom: 'An-Naml', isPlaying: false },
    { nom: 'Al-Qasas', isPlaying: false },
    { nom: 'Al-Ankabut', isPlaying: false },
    { nom: 'Ar-Rum', isPlaying: false },
    { nom: 'Luqman', isPlaying: false },
    { nom: 'As-Sajda', isPlaying: false },
    { nom: 'Al-Ahzab', isPlaying: false },
    { nom: 'Saba', isPlaying: false },
    { nom: 'Fatir', isPlaying: false },
    { nom: 'Ya-Sin', isPlaying: false },
    { nom: 'As-Saffat', isPlaying: false },
    { nom: 'Sad', isPlaying: false },
    { nom: 'Az-Zumar', isPlaying: false },
    { nom: 'Ghafir', isPlaying: false },
    { nom: 'Fussilat', isPlaying: false },
    { nom: 'Ash-Shura', isPlaying: false },
    { nom: 'Az-Zukhruf', isPlaying: false },
    { nom: 'Ad-Dukhan', isPlaying: false },
    { nom: 'Al-Jathiya', isPlaying: false },
    { nom: 'Al-Ahqaf', isPlaying: false },
    { nom: 'Az-Zariyat', isPlaying: false },
    { nom: 'Al-Hadid', isPlaying: false },
    { nom: 'Al-Mujadila', isPlaying: false },
    { nom: 'Al-Mulk', isPlaying: false },
    { nom: 'An-Naba', isPlaying: false },
    { nom: 'An-Nazi`at', isPlaying: false },
    { nom: 'Abasa', isPlaying: false },
    { nom: 'At-Takwir', isPlaying: false },
    { nom: 'Al-Infitar', isPlaying: false },
    { nom: 'Al-Mutaffifin', isPlaying: false },
    { nom: 'Al-Inshiqaq', isPlaying: false },
    { nom: 'Al-Burooj', isPlaying: false },
    { nom: 'At-Tariq', isPlaying: false },
    { nom: 'Al-A`la', isPlaying: false },
    { nom: 'Al-Ghashiya', isPlaying: false },
    { nom: 'Al-Fajr', isPlaying: false },
    { nom: 'Al-Balad', isPlaying: false },
    { nom: 'Ash-Shams', isPlaying: false },
    { nom: 'Al-Lail', isPlaying: false },
    { nom: 'Ad-Duhaa', isPlaying: false },
    { nom: 'Ash-Sharh', isPlaying: false },
    { nom: 'At-Tin', isPlaying: false },
    { nom: 'Al-`Alaq', isPlaying: false },
    { nom: 'Al-Qadr', isPlaying: false },
    { nom: 'Al-Bayyina', isPlaying: false },
    { nom: 'Az-Zalzala', isPlaying: false },
    { nom: 'Al-`Adiyat', isPlaying: false },
    { nom: 'Al-Qaria', isPlaying: false },
    { nom: 'At-Takathur', isPlaying: false },
    { nom: 'Al-Asr', isPlaying: false },
    { nom: 'Al-Humaza', isPlaying: false },
    { nom: 'Al-Fil', isPlaying: false },
    { nom: 'Quraish', isPlaying: false },
    { nom: 'Al-Ma`un', isPlaying: false },
    { nom: 'Al-Kawthar', isPlaying: false },
    { nom: 'Al-Kafiroon', isPlaying: false },
    { nom: 'An-Nasr', isPlaying: false },
    { nom: 'Al-Masad', isPlaying: false },
    { nom: 'Al-Ikhlas', isPlaying: false },
    { nom: 'Al-Falaq', isPlaying: false },
    { nom: 'An-Nas', isPlaying: false }*/
  ];
  audio : any;
  sourateList : any;
  sourateAudioList : any;
  nom='Mamadou';
  prenom='Daffé'
  photo="../../assets/icon/mamadou_daffe.jpg";
  recherche: string='';
  isPlay! : number;
  isPause! : number;
  /*index = this.sourates.map((sourate, index) => ({nom: sourate.nom, isPlaying: sourate.isPlaying, index}));*/
  get sourateFiltres() {
    return this.sourates.map((sourate, index) => ({ nom: sourate.nom, isPlaying: sourate.isPlaying,numero:sourate.numeroSourate, index})).filter(sourate => sourate.nom.toLowerCase().includes(this.recherche.toLowerCase()));
  }

  constructor(private activatedRoute : ActivatedRoute, private http : HttpClient, private lecteurService : LecteurService) { }

  ngOnInit() {
    this.lecteurService.playEnd.subscribe(result=>{
      this.isPause = result;
    })
    this.activatedRoute.paramMap.subscribe(params =>{
      const id = params.get("identifient")
      this.http.get("https://api.quran.com/api/v4/chapters").subscribe((result : any)=>{
        this.sourateList = result.chapters;
      });
      this.http.get("https://api.quran.com/api/v4/chapter_recitations/"+id).subscribe((result : any)=>{
        this.sourateAudioList = result.audio_files;
      })
    })
  }


  playIcon: string = 'play-outline';
  isPlaying: boolean = false;

  // togglePlay(index : number) {
  //   this.isPlay = index;
  //     // if (sourate && sourate.isPlaying ===false) {
  //     //   if(sourate.isPlaying) {
  //     //     sourate.isPlaying = !sourate.isPlaying;
  //     //     this.playIcon = sourate.isPlaying ? 'pause-circle-outline' : 'play-outline';
  //     //     this.isPlaying = sourate.isPlaying;
  //     //     console.log(this.isPlaying);
  //     // } else {
  //     //     sourate.isPlaying = true;
  //     //     this.playIcon = 'pause-circle-outline';
  //     //     this.isPlaying = true;
  //     //     console.log(this.isPlaying);
  //     // }
  //   //}
  // }

  playQuran(index : number){
    if(this.isPlay == index){
      if(this.isPause == index)
        this.isPause = -1;
      else
        this.isPause = index;
    }
    this.isPlay = index;
    this.lecteurService.playQuran(index,this.sourateAudioList[index].audio_url)
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
