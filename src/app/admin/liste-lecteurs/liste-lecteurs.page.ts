import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListeLecteurService} from "../../services/liste-lecteur.service";

@Component({
  selector: 'app-liste-lecteurs',
  templateUrl: './liste-lecteurs.page.html',
  styleUrls: ['./liste-lecteurs.page.scss'],
})
export class ListeLecteursPage implements OnInit, OnDestroy {
  imanFiltres= [
    {nom: '',prenom: '',nationalite: 'fd',index:0,photo: 'fsdf'}
  ];
  recherche='';

  constructor(private listeLecteurService: ListeLecteurService) { }

  ngOnInit() {
    this.listeLecteurService.listeListeLecteurs().subscribe(listeLecteurs=>
      console.log(listeLecteurs)
    )
  }

  ngOnDestroy(): void {
  }
}
/*
  imans=[
    { prenom:'Mamadou',nom: 'Daffé',nationalite:'franço-malien',photo:"../../assets/icon/mamadou_daffe.jpg",index:0},
      { prenom:'Mahi',nom: 'Ouattara',nationalite:'malien',photo: "../../assets/icon/mahi.jpg",index:1},
      { prenom:'Abdoulaye',nom: 'Goïta',nationalite:'malien',photo: "../../assets/icon/abdoulaye.jpg",index:2},
  ];

  get imanFiltres() {
    return this.imans.map((imans, index) => ({prenom: imans.prenom, nom: imans.nom,photo:imans.photo,nationalite:imans.nationalite,index})).filter(imans => imans.nom.toLowerCase().includes(this.recherche.toLowerCase()));
  }



  supprimer(imans:{ index: number; nom:string;prenom:string;nationalite:string;photo:string}) {
    this.imans.splice(imans.index,1);
    for (let i = imans.index; i < this.imans.length; i++) {
      this.imans[i].index = i;
    }
  }*/
