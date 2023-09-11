import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sourate-liste',
  templateUrl: './sourate-liste.page.html',
  styleUrls: ['./sourate-liste.page.scss'],
})
export class SourateListePage implements OnInit {

  sourates : any[]=[];
  nom='Mamadou';
  prenom='Daffé'
  photo="../../assets/icon/mamadou_daffe.jpg";
  recherche: string='';
  /*index = this.sourates.map((sourate, index) => ({nom: sourate.nom, isPlaying: sourate.isPlaying, index}));*/
  get sourateFiltres() {
    return this.sourates.map((sourate, index) => ({ nom: sourate.nom, isPlaying: sourate.isPlaying,numero:sourate.numeroSourate, index})).filter(sourate => sourate.nom.toLowerCase().includes(this.recherche.toLowerCase()));
  }

  constructor(private http : HttpClient, private route : Router) { }

  ngOnInit() {
    this.http.get("http://api.alquran.cloud/v1/surah").subscribe((result : any)=>{
      this.sourates = result.data;
    })
  }

  goToSourate(id : any){
    this.route.navigateByUrl("/pageaffichage/"+id);
  }

}
