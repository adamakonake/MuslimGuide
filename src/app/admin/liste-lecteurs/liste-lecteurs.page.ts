import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-lecteurs',
  templateUrl: './liste-lecteurs.page.html',
  styleUrls: ['./liste-lecteurs.page.scss'],
})
export class ListeLecteursPage implements OnInit {

  sourates=[
    { nom: 'Al-Fatiha', isPlaying: false },
    { nom: 'Al-Baqara', isPlaying: false },
    { nom: 'Al-Imran', isPlaying: false },
    { nom: 'An-Nisa', isPlaying: false },
    { nom: 'Al-Maaida', isPlaying: false },
    { nom: 'Al-An`am', isPlaying: false },
    { nom: 'Al-A`raf', isPlaying: false },
    { nom: 'Al-Anfal', isPlaying: false },
    { nom: 'At-Tawba', isPlaying: false },
    { nom: 'Yunus', isPlaying: false },
    { nom: 'Hud', isPlaying: false },
    { nom: 'Yusuf', isPlaying: false },
    { nom: 'Ibrahim', isPlaying: false },
    { nom: 'Al-Hijr', isPlaying: false },
    { nom: 'An-Nahl', isPlaying: false },
    { nom: 'Al-Isra', isPlaying: false },
    { nom: 'Al-Kahf', isPlaying: false },
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
    { nom: 'An-Nas', isPlaying: false }
  ];
  nom='Mamadou';
  prenom='Daffé'
  photo="../../assets/icon/mamadou_daffe.jpg";
  recherche: string='';
  /*index = this.sourates.map((sourate, index) => ({nom: sourate.nom, isPlaying: sourate.isPlaying, index}));*/
  get sourateFiltres() {
    return this.sourates
      .map((sourate, index) => ({ nom: sourate.nom, isPlaying: sourate.isPlaying, index}))
      .filter(sourate => sourate.nom.toLowerCase().includes(this.recherche.toLowerCase()));
  }

  constructor() { }

  ngOnInit() {
  }


  playIcon: string = 'play-outline';
  isPlaying: boolean = false;
  isPlayVisible: boolean = true;

  togglePlay(sourate: any) {
      if (sourate && sourate.isPlaying !==undefined) {
        if(sourate.isPlaying) {
          sourate.isPlaying = false;
          this.playIcon = 'play-outline';
          this.isPlaying = false;
          console.log(this.isPlaying);
      } else {
          sourate.isPlaying = true;
          this.playIcon = 'pause-circle-outline';
          this.isPlaying = true;
          console.log(this.isPlaying);
      }
    }
  }
}
