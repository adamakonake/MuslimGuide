import { Even } from './../../users/models/even';
import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
// import { error } from 'console';
import { AjoutenvenService } from 'src/app/services/ajoutenven.service';

@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.page.html',
  styleUrls: ['./liste-evenement.page.scss'],
})
export class ListeEvenementPage implements OnInit {
  evenement: any;
  evenementSaved: any;
  

  constructor(private firestore : Firestore,
              private router: Router,
              private ajoueven : AjoutenvenService) { }

  ngOnInit() {
    this.getAllEvent();
  }

  //////////code pour la barre de recherche///////////////
  onSearch(ev: any){
  console.log(ev.target.value);
    console.log('pas de rechche');
  this.evenement= this.evenementSaved;
  const filteredData = this.evenement.filter((even: any)=>even.lieu.includes(ev.target.value));
  this.evenement = filteredData;
  console.log(filteredData);
  console.log('recherche effectuer')
  }
  /////////RECUPERATION DE LA METHODE DE RECUPERATION DANS LE SERVICE/////////////////////////
  getAllEvent(){
    this.ajoueven.getlistevenment().subscribe(result =>{
      this.evenement = result;
      this.evenementSaved = result;
      console.log(this.evenement, 'je suis raatrapper');

    });}

  //////////////////////////modification///////////////////////////////////
  updateeven(evenement : any){
    this.ajoueven.updateeven(evenement.id, evenement);
  }

  //////////////RECUPERATION DE LA METHODE DE SUPPRESSION//////////////////
  async deleteEvenById(evenementId : string): Promise<void>{
    try{
      await this.ajoueven.deleteEvenById(evenementId);
      console.log('Suppression effectuer')
    }catch(error){
      console.error('Erreur')
    }
  }

  //lien ajout button
  naviguerVersAjoutEvenement() {
    this.router.navigateByUrl("/ajouter-evenement");
  }
  // ::::::::::::::::::::::::::::::::::::traitement poppup pour animation:::::::::::::::::::::::::::::::::::::::::::::::::::
  

}
