            import { Component, OnInit } from '@angular/core';
            import { ActivatedRoute, Router } from '@angular/router';
            import { ChangeDetectorRef } from '@angular/core';
            //import { error } from 'console';
            // import { error } from 'console';
            import { AjoutannonceService } from 'src/app/admin/services/ajoutannonce.service';

            @Component({
              selector: 'app-list-mosques',
              templateUrl: './list-mosques.page.html',
              styleUrls: ['./list-mosques.page.scss'],
            })
            export class ListMosquesPage implements OnInit {
              detailMosquees : any[]=[];
              seletedMosqueId: string | undefined;
              filteredDetails: string[] | undefined;
              activedMosquee:any;
              selectedMosqueName: string | undefined;

              constructor(private ajoutrService : AjoutannonceService , activedRoute:ActivatedRoute,private cdr: ChangeDetectorRef) { 
                
                  this.activedMosquee = activedRoute.snapshot.paramMap.get('nomMosquee');
                }


              ngOnInit(): void {
                this.ajoutrService.getDetailleMosquees().then((detaille:string[])=> {
                  this.detailMosquees =detaille;
                  this.detailMosquees = this.detailMosquees.filter(detail => detail.nomMosquee === this.activedMosquee);
                  
                })
                .catch(error =>{console.error('Erreur lors de recupeartion :',error);});
                
            }
            filterDetailsByMosqueId(mosqueId: string){
              console.log(this.detailMosquees);
              return ;
            }


            onClickMosque(mosqueId: string, mosqueName: string) {
              // Mettez à jour l'identifiant de la mosquée sélectionnée
              this.seletedMosqueId = mosqueId;

              
                // Mettez à jour le nom de la mosquée sélectionnée
                this.selectedMosqueName = mosqueName;
                this.cdr.detectChanges();

                // Appelez la fonction pour mettre à jour les détails affichés
              this.filterDetailsByMosqueId(this.seletedMosqueId);
            }}









//   this.selectedMosqueName = mosqueName;
//  // this.filteredDetails = 
// }

// onClickMosque(mosqueId: string, mosqueName: string) {
//   // Mettez à jour l'identifiant de la mosquée sélectionnée
//   this.seletedMosqueId = mosqueId;

// Mettez à jour le nom de la mosquée sélectionnée
  //this.selectedMosqueName = mosqueName;

//   // Appelez la fonction pour mettre à jour les détails affichés
//   //this.filteredDetails = this.filterDetailsByMosqueId(this.seletedMosqueId);
// }