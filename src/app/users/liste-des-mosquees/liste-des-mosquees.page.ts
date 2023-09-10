import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-des-mosquees',
  templateUrl: './liste-des-mosquees.page.html',
  styleUrls: ['./liste-des-mosquees.page.scss'],
})
export class ListeDesMosqueesPage implements OnInit {
  mosquee:any=[]
  constructor() { 
    this.mosquee = [
      {
        name: " Mosquée III d'Hamdallaye",
        imageUrl: '',
        annexe: 'Annexe: Tibunal de la CIV',
        capacity: 500,
      },
     
      // Ajoutez d'autres mosquées ici
    ];
  }

  ngOnInit() {
  }
 

}
