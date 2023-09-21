import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import {CdkDrag} from '@angular/cdk/drag-drop';




@Component({
  selector: 'app-chapelet',
  templateUrl: './chapelet.page.html',
  styleUrls: ['./chapelet.page.scss'], 
})
export class ChapeletPage implements OnInit {

   count!:number; 

  

  constructor() { }

    
  ngOnInit() {
    this.count = 0;
  }

  increment(count:number):any{
    this.count++;
  }

  resetNumber():any{
   this.count = 0;
  }


  // ex 

  // compteur: number = 0;

  // incrementCompteur() {
  //   this.compteur++;
  // }

  // decrementCompteur() {
  //   if (this.compteur > 0) {
  //     this.compteur--;
  //   }
  // }

   billesTop = Array(4).fill({ dragged: false });
  billesBottom = Array(4).fill({ dragged: false });
  compteur = 0;

  // onBilleDrag(event: CustomEvent, index: number, position: 'top' | 'bottom') {
  //   const bille = position === 'top' ? this.billesTop[index] : this.billesBottom[index];

  //   if (event.detail && event.detail.pointerType === 'touch') {
  //     bille.dragged = true;
  //   } else if (event.detail && event.detail.pointerType === 'mouse' && bille.dragged) {
  //     // Handle mouse drag
  //     if (event.detail.deltaY < 0) {
  //       // Dragged up
  //       this.incrementCompteur();
  //     } else if (event.detail.deltaY > 0) {
  //       // Dragged down
  //       this.decrementCompteur();
  //     }
  //     bille.dragged = false;
  //   }
  // }

  incrementCompteur() {
  
      this.compteur++;
    
  }

  decrementCompteur() {
    if (this.compteur > 0) {
      this.compteur--;
    }
  }

  // onBilleDrag(event: any) {
  //   // Réinitialisez la position de la bille en bas lorsque vous faites glisser vers le haut
  //   event.target.style.transform = 'translateY(0)';
    
  //   // Appelez la méthode pour ajouter une nouvelle bille
  //   this.createNewBille();
  
  //   // Appelez la méthode pour supprimer une bille en haut
  //   this.deleteTopBille();
  // }


  // createNewBille() {
  //   // Récupérez l'élément boules-bottom
  //   const boulesBottom = document.querySelector('.boules-bottom');
  
  //   // Assurez-vous que boulesBottom n'est pas nul avant d'ajouter une nouvelle bille
  //   if (boulesBottom) {
  //     // Créez une nouvelle bille
  //     const nouvelleBille = document.createElement('div');
  //     nouvelleBille.classList.add('boule');
  
  //     // Ajoutez la bille à la partie inférieure du chapelet
  //     boulesBottom.appendChild(nouvelleBille);
  //   }
  // }
  // deleteTopBille() {
  //   // Récupérez toutes les billes en haut
  //   const billesTop = document.querySelectorAll('.boules-top .boule');
  
  //   // Si des billes en haut existent
  //   if (billesTop.length > 0) {
  //     // Supprimez la première bille en haut (la plus ancienne)
  //     billesTop[0].remove();
  //   }
  // }



    


}
