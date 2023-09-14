import { Injectable } from '@angular/core';
import {collectionData, Firestore} from '@angular/fire/firestore';
import { Lecteur } from '../admin/ajout-lecteur/mode';
import {addDoc, collection, deleteDoc, doc} from 'firebase/firestore';
import {updateDoc} from "@firebase/firestore";
import {map, of} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class LecteurService {
  lecteur:any[]=[];
  constructor(private readonly firestore: Firestore) { }

  addLecteur(lecteur: Lecteur) {
    const data = collection(this.firestore, "Lecteur");
    return addDoc(data,{
      nom: lecteur.nom,
      prenom: lecteur.prenom,
      nationalite: lecteur.nationalite,
      photo: lecteur.photo,

    });
  }
    getLecteur(){
        if (this.lecteur.length > 0) {
            return of(this.lecteur);
        }
        const data = collection(this.firestore, "Lecteur");
        return collectionData(data, { idField: 'id' }).pipe(
            map((resultat: any[]) => {
                this.lecteur = resultat.map(lecteur => ({ id: lecteur.id, ...lecteur }));
                return this.lecteur;
            })
        );
    }

  deleteLecteur(lecteurId: string) {
    const data = doc(this.firestore, "Lecteur", lecteurId);
    return deleteDoc(data);
  }
  updateLecteur(lecteurId: string, updatedLecteurData: Partial<Lecteur>) {
    const data = doc(this.firestore, "Lecteur", lecteurId);
    return updateDoc(data, updatedLecteurData);
  }

}

