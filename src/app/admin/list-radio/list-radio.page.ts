import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-radio',
  templateUrl: './list-radio.page.html',
  styleUrls: ['./list-radio.page.scss'],
})
export class ListRadioPage implements OnInit {
  recherche:string= '';
  radios=[
    {nom: 'RADIO DAMBE', frequence:'90.6',index:0},
    {nom: 'RADIO KLEDOU', frequence:'84.6',index: 1},
    {nom: 'RADIO RENOUVEAU', frequence:'91.8',index: 2},
  ];

  constructor(private route: Router) { }
  get fmFilterer(){
    return this.radios.map((radio, index) =>({nom:radio.nom,frequence:radio.frequence,index})).filter((radio=>radio.nom.toLowerCase().includes(this.recherche.toLowerCase())));
  }
  ngOnInit() {
  }

  ajouterRadio() {
    this.route.navigateByUrl('/ajout-des-radios')
  }
}
