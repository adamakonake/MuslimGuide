import { HttpClient } from '@angular/common/http';
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

  lecteurs : any;
  constructor( private http : HttpClient) { }

  ngOnInit() {
    this.http.get("https://api.quran.com/api/v4/resources/recitations").subscribe((result : any)=>{
      this.lecteurs = result.recitations;
      console.log(result)
    })
  }



}
