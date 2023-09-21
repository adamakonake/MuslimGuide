import { Injectable } from '@angular/core';
import { Inscription } from '../admin/inscription/model';
import { Firestore, docSnapshots } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

 
  constructor(private readonly firestore: Firestore, private auth : Auth,private route:Router) { }

    async addInscription(inscription: Inscription) {
      return await createUserWithEmailAndPassword(
        this.auth,
        inscription.email,
        inscription.password,
      ).then(async (userCredential)=>{
        const adminCollection = doc(this.firestore, `Admin/${userCredential.user.uid}`);
        try {
          return await setDoc(adminCollection, {
            nom: inscription.nom,
            prenom: inscription.prenom,
            email: inscription.email,
          });
        } catch (err) {
          console.log(err);
        }
      }).catch((err)=>{
        console.log(err.message)
      })
    
    }

    async logIn(email : string, password : string){
      return await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      ).then((result) =>{
        this.route.navigateByUrl("admin-accueil/"+result.user.uid);
      }).catch((err)=>{
        return err.message;
      });
    }

    getAdminId(idAdmin : any){
      const adminDocRef = doc(this.firestore,"Admin",idAdmin)
      return docSnapshots(adminDocRef).pipe(map(doc =>{
        const id = doc.id;
        const data = doc.data();
        return {id, ...data}
      }))
    }

    // FSEG2021MA004115

}
