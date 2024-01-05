import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutannonceService } from 'src/app/admin/services/ajoutannonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {

  nomsMosquee : string[]=[];

  constructor(private ajoutannonc : AjoutannonceService,
     private router: Router) { }

  //lien vers listemosque
  detaillemosquee(nameMosquee:string) {
    //this.router.navigateByUrl("/list-mosques");
    this.router.navigate(['/list-mosques',{nomMosquee:nameMosquee}])
  }

  ngOnInit(): void {
    this.ajoutannonc.getNomsMosquees()
      .then((noms: string[]) => {
        // j'ai maintenant la liste des noms de mosquées
        this.nomsMosquee = noms;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des noms de mosquées : ', error);
      });
  }

}
