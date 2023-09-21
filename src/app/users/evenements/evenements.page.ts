import { Component, OnInit } from '@angular/core';
import { AjoutenvenService } from 'src/app/services/ajoutenven.service';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.page.html',
  styleUrls: ['./evenements.page.scss'],
})
export class EvenementsPage implements OnInit {
  evenement : any;
  evenementSaved : any;
 

  constructor(private firestore : Firestore, private ajoueven : AjoutenvenService) {}

  ngOnInit() {this.geteven();}

  /////////RECHERCHE////////////////
  onSearch(ev : any){
    console.log(ev.target.value);
    this.evenement = this.evenementSaved;
    const filteredData = this.evenement.filter((even : any) =>even.lieu.includes(ev.target.value));
    this.evenement = filteredData;
    console.log(filteredData);
  }

   //////////RECUPERER MES DONNEES DANS LE SERVIE DE ADMINE A USR////////////////////////////
  geteven() {
    this.ajoueven.getlistevenment().subscribe(result =>{
      this.evenement = result;
      this.evenementSaved = result;
      console.log('ma belle je suis là')
    })
    throw new Error('Method not implemented.');
  } 

}
