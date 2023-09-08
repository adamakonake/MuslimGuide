import { Component, OnInit } from '@angular/core';


// Interface pour définir la structure d'une personne
interface Personne {
  nom: string;
  description: string;
}

@Component({
  selector: 'app-lecteur-corant',
  templateUrl: './lecteur-corant.page.html',
  styleUrls: ['./lecteur-corant.page.scss'],
})


export class LecteurCorantPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
