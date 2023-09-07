import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-liste-des-sourates',
  templateUrl: './user-liste-des-sourates.page.html',
  styleUrls: ['./user-liste-des-sourates.page.scss'],
})
export class UserListeDesSouratesPage implements OnInit {
  sourates=['Al-Fatiha','Al-Baqara','Al-Imran','An-Nisa','Al-Maaida','Al-Anaam','Al-A','Al-Araaf','Yunus','Hud','Yusuf','Ar-Ra','Ibrahim','Al-Hijr','An-Nahl','Al-Isra','Al-Kahf','Maryam','Al-Hajj','Al-Mumtahan','Al-Fath','Al-Hujur','Al-Mujadilah','Al-Hadid','Al-Mumtahana','Al-Ikamah','Al-Falaq','An-Nas','Al-As','Al-Ahzab','Al-Mulk','Al-Qalam','Al-Haa','Al-Mum','Al-Musallat','Al-Insala','Al-Mursalat','An-Naba','Al-Numaya','Al-Hijja','Al-Ahzab'];
  /*recherche: string = '';*/
  recherche: string='';
  get sourateFiltres() {
    return this.sourates.filter(sourate => sourate.toLowerCase().includes(this.recherche.toLowerCase()));
  }

  constructor() { }

  ngOnInit() {
  }

}
