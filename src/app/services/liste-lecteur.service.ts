import { Injectable } from '@angular/core';
import {ListeLecteur} from "../modele/liste-lecteur";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class ListeLecteurService {

  listeLecteurRef$: AngularFireList<ListeLecteur>;

  constructor(private database: AngularFireDatabase) {
    this.listeLecteurRef$ = this.database.list('liste-lecteur');
  }

  AllListeLecteurs() {
    return this.listeLecteurRef$.valueChanges();
  }

  ajouterListeLecteur(listeLecteur: ListeLecteur) {
    this.listeLecteurRef$.push(listeLecteur);
  }

  mAJListeLecteur(key: string, listeLecteur: ListeLecteur) {
    this.listeLecteurRef$.update(key, listeLecteur);
  }

  supprimerListeLecteur(key: string) {
    this.listeLecteurRef$.remove(key);
  }
}
