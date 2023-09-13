  import { Injectable } from '@angular/core';
  import { Firestore, collectionData } from '@angular/fire/firestore';
  // import { AngularFirestore } from '@angular/fire/firestore';
  import { DocumentData, DocumentReference, addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
  import { deleteDoc } from 'firebase/firestore';
  import { Observable, map } from 'rxjs';
  import { Annonce } from 'src/app/users/models/annonce';
  import { AlertController } from '@ionic/angular';
  import { Handler } from 'leaflet';
  import { async } from '@angular/core/testing';



  @Injectable({
    providedIn: 'any'
  })
  export class AjoutannonceService {
    annonces : any[]=[];
    
    //ajouter une annonce depuis le sevice
    constructor(private readonly firestore: Firestore, private alertController : AlertController) {}
    
    async addannonce(annonce: Annonce): Promise<DocumentReference> {
      // Vérifiez si tous les champs sont remplis
      if (!annonce.date || !annonce.nomMosquee || !annonce.heurePreche || !annonce.heureTabsir) {
        // Affichez un message d'erreur modal à l'utilisateur
        const alert = await this.alertController.create({
          header: 'Erreur',
          message: 'Attention champs vide non enregistrable ',
          buttons: ['OK']
        });
    
        await alert.present();
    
        // Rejetez la promesse pour éviter d'ajouter le document incorrect
        return Promise.reject('Les champs obligatoires ne sont pas définis.');
      }
    
      const document= collection(this.firestore, "Annonce");
      console.log(annonce);
      return addDoc(document,{
        date : annonce.date,
        nomMosquee : annonce.nomMosquee,
        heurePreche : annonce.heurePreche,
        heureTabsir : annonce.heureTabsir,
      });
    
    }
    //recuperer les ajout d'annonce dans la liste annonces
    getlistannonce(){
      const document = collection(this.firestore, "Annonce");
      // this.annonces = [];
      
    
      return collectionData(document, {idField : 'id'})//.subscribe((result : any[]) => { 
    }

    //methode de modification de la liste des annonces
    async updateannonce(index : string, annonce:any){
      const modal = await this.alertController.create({
        header: 'Modification',
        inputs :[{
          name: 'date',
          type : 'date',
          value : annonce.date //prends les valeur de la date 
        },
        {
          name : 'nomMosquee',
          type: 'text',
          placeholder : '....',
          value: annonce.nomMosquee // prends les valeurs du champs de la mosquée
        },
        {
          name : 'heurePreche',
          type : 'time',
          placeholder :'hh:mm',
          value : annonce.heurePreche // prends les valeurs d'heure de preche 
        },

        {
          name : 'heureTabsir',
          type : 'time',
          placeholder : 'hh:mm',
          value : annonce.heureTabsir // prens les valeurs d'heure de tabsir
        }
      ],
      buttons : [
        {
          text : 'Annuler', 
          role : 'cancel'
        },{
          text : 'Modifier',
          handler : async(data) =>{

            //validez les données des champs avant modification
            try{
            console.log(this.firestore)
            const annonceDoc = doc(this.firestore, 'Annonce', index); //utilisez l'id de annonce dans la base 
            await updateDoc(annonceDoc,{
              date : data.date, 
              nomMosquee : data.nomMosquee,
              heurePreche : data.heurePreche,
              heureTabsir : data.heureTabsir });

              // Affichez un message de confirmation à l'utilisateur
              const confirmation = await this.alertController.create({
                header: 'Confirmation',
                message: 'L\'annonce a été modifiée avec succès.',
                buttons: ['OK'],
              });

                
              await confirmation.present();
            } catch (error) {
              console.error('Erreur lors de la mise à jour : ', error);

              // Affichez un message d'erreur à l'utilisateur
              const erreur = await this.alertController.create({
                header: 'Erreur',
                message: 'Une erreur s\'est produite lors de la mise à jour de l\'annonce.',
                buttons: ['OK'],
              });

              await erreur.present();

              }
              },
            }
              ],
              });
          await modal.present();
              }

    // Méthode pour supprimer une annonce par ID
    async deleteAnnonceById(annonceId: string): Promise<void> {
      try {
        const documentRef = doc(this.firestore, 'Annonce', annonceId);
        const supp = await this.alertController.create({
          header: 'Suppression',
          message: 'Attention, voulez-vous vraiment supprimer ?',
          buttons: [
            {
              text: 'Non',
              role: 'cancel',
            },
            {
              text: 'Oui',
              handler: async () => {
                await deleteDoc(documentRef);
                
              },
            },
          ],
        });
        await supp.present();
      } catch (error) {
        console.error('Erreur lors de la suppression : ', error);
      }
    }
  }    

