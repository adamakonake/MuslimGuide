import { Injectable } from '@angular/core';
import { Inscription } from '../admin/inscription/model';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

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
        this.route.navigateByUrl("admin-accueil");
        return result.user
       
      }).catch((err)=>{
        return err.message;
      });
    }

    // FSEG2021MA004115

}
