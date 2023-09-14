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
        const nomMosqueeA = a.nomMosquee.toLowerCase();
        const nomMosqueeB = b.nomMosquee.toLowerCase();
      
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

  //methode de modification 

  // modifierannonce(index : string){
  //   this.ajoutrService.updateannonce(this.annoncee[index].id, this.annoncee[index])
  // }
  modifierannonce(annonce: any) {
    this.ajoutrService.updateannonce(annonce.id, annonce);
  }
  //code pour la recherche
  onSearch(ev:any) {
     console.log(ev.target.value);
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










// methode de recherche
  // onSearchChange() {
  //   console.log("je change")
  //   // this.ajoutrService.searchQuery = this.searchQuery; // Passez la valeur de recherche au service
  //   //this.ajoutrService.getlistannonce();
  // }

// //ouvre la boite a dialogue de la confirmation dans le composant confirm
//   confirmdialog(){
//     this.confirmdialogVisible = true;
//   }


//confirmation de la suppresion apres que l'utilisation ai condirmer
//   confirmDelete(){
//     this.deleteAnnonceById(this.annoncee);
//     this.confirmdialogVisible = false;
  
// }

   //   const annonceIdToDelete = 'votre_id';
  //   try {
  //     await this.ajoutrService.deleteAnnonceById(annonceIdToDelete);
  //     console.log('Annonce supprimée avec succès');
  //     // La suppression a réussi, vous pouvez mettre à jour votre liste d'annonces ici si nécessaire.
  //     this.annoncee = this.ajoutrService.getlistannonce();
  //   } catch (error) {
  //     console.error('Erreur lors de la suppression : ', error);
  //   }
  // }
    

//   try {
//     // Supprimer l'annonce (utilisez votre propre logique pour déterminer l'annonce à supprimer)
//     await this.ajoutrService.deleteAnnonceById(this.annoncee);
//     console.log('Annonce supprimée avec succès');
    
//     // Mettez à jour votre liste d'annonces ici après la suppression
//     this.annoncee = this.ajoutrService.getlistannonce();
//   } catch (error) {
//     console.error('Erreur lors de la suppression : ', error);
//   
// 
