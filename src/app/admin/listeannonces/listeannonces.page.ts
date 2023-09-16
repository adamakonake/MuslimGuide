import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AjoutannonceService } from '../services/ajoutannonce.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-listeannonces',
  templateUrl: './listeannonces.page.html',
  styleUrls: ['./listeannonces.page.scss'],
})

export class ListeannoncesPage implements OnInit {
  
  isconfirmdialogVisible: boolean = false;
  annoncee : any ;
  annonceSaved:any;
  confirmdialogVisible: boolean | undefined;
   
  constructor( private firestor : Firestore, private ajoutrService : AjoutannonceService, private router: Router, private formBuider : FormBuilder) {
   
  }
 //lien ajout button
  naviguerVersAjoutAnnonces() {
    this.router.navigateByUrl("/ajoutannonces");
  }

  ngOnInit(){
    this.getAllAnnonces();
  }

  //methode pour la recuperation
  getAllAnnonces(){
    this.ajoutrService.getlistannonce().subscribe(resul=>{
      this.annoncee = resul;
      this.annonceSaved = resul;
      console.log(this.annoncee);

      //trier par ordre alphabetique
      this.annoncee.sort((a: { nomMosquee: string; },
        b: { nomMosquee: string; }) => {
        const nomMosqueeA = a.nomMosquee;
        const nomMosqueeB = b.nomMosquee;
      
        if (nomMosqueeA < nomMosqueeB) {
          return -1;
        }
        if (nomMosqueeA > nomMosqueeB) {
          return 1;
        }
        return 0;
      });
    })
    //return this.annoncee;
  }

  modifierannonce(annonce: any) {
    this.ajoutrService.updateannonce(annonce.id, annonce);
  }
  //code pour la recherche
  onSearch(ev:any) {
    //  console.log(ev.target.value);
     console.log(this.annoncee);
      this.annoncee = this.annonceSaved;
     const filteredData = this.annoncee.filter((ann:any) => ann.nomMosquee.includes(ev.target.value));
      this.annoncee = filteredData;
     console.log(filteredData);
    
  }
//code pour la suppression des annoonces 
  async deleteAnnonceById(annonceId: string): Promise<void> {
    try {
      await this.ajoutrService.deleteAnnonceById(annonceId);
      console.log('Annonce supprimée avec succès');
      
      this.annoncee = this.annoncee.filter((annonce: { id: string; }) => annonce.id !== annonceId);
    } catch (error) {
      console.error('Erreur lors de la suppression : ', error);
    }
   
  }
  
}






