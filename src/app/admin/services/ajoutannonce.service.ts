import { Injectable } from '@angular/core';
 import { Firestore, collectionData } from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { deleteDoc } from 'firebase/firestore';
import { Observable, map } from 'rxjs';
import { Annonce } from 'src/app/users/models/annonce';



@Injectable({
  providedIn: 'any'
})
export class AjoutannonceService {
   annonces : any[]=[];
  
  
  constructor(private readonly firestore: Firestore) {}
  addannonce (annonce: Annonce){
    const document= collection(this.firestore, "Annonce");
    console.log(annonce);
    return addDoc(document,{
      date : annonce.date,
      nomMosquee : annonce.nomMosquee,
      heurePreche : annonce.heurePreche,
      heureTabsir : annonce.heureTabsir,
    });
  
  }
  
  getlistannonce(){
    const document = collection(this.firestore, "Annonce");
    // this.annonces = [];
    console.log("ajout des an")
  
    return collectionData(document, {idField : 'id'})//.subscribe((result : any[]) => {
    
    
  }

  
  // Méthode pour supprimer une annonce par ID
  deleteAnnonceById(annonceId: string): Promise<void> {
  const documentRef = doc(this.firestore, 'Annonce', annonceId);
  return deleteDoc(documentRef); // Utilisez deleteDoc au lieu de deleteAnnonceById
}
  
}






  // getAnnoncesList(): Observable<any[]> {
  //   return this.firestore
  //     .collection('Annonce')
  //     .snapshotChanges()
  //     .pipe(
  //       map((actions: any[]) => { // Spécifiez le type d'actions comme un tableau d'any
  //         return actions.map(a => {
  //           const data = a.payload.doc.data() as any;
  //           const id = a.payload.doc.id;
  //           return { id, ...data };
  //         });
  //       })
  //     );
  // }