import { Injectable } from '@angular/core';
import { DocumentReference, Firestore, collectionData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc } from 'firebase/firestore';
import { Even } from '../users/models/even';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'any'
})
export class AjoutenvenService {

  constructor( private readonly firestore: Firestore, private alertController : AlertController,
    private router : Router) { }

  navigueraj() {
    this.router.navigateByUrl("/ajouter-evement");
  }

//////////////////ajout evenement /////////////////////////////////
  async ajoutenven (evenement : Even) : Promise<DocumentReference>{
    const document= collection(this.firestore, "Even");
    return addDoc(document,{
      type : evenement.type,
      lieu : evenement.lieu,
      date : evenement.date,
      heure : evenement.heure,
      description: evenement.description
    })

  }

  /////////GESTION DE CHAMPS VIDE //////////////////
  async ajoutEven(evenement: Even) {
    let check = true;
    const q = query(collection(this.firestore, 'Even'));
    const querySnapShoot = await getDocs(q);
    console.log(querySnapShoot.docs);
    for (let index in querySnapShoot.docs) {

     console.log(querySnapShoot.docs[index].data()['date']);
      if(querySnapShoot.docs[index].data()['date'] == evenement.date){
            check = false;
      }
    }
    //CHAMPS VIDE/////////////////////////////////////////////
    if (!evenement.type || !evenement.lieu || !evenement.heure || !evenement.description || !evenement.date) {
      // Affichez un message d'erreur modal à l'utilisateur
       const alert = await this.alertController.create({
         header: 'Erreur',
         message: 'Attention un champs vide ne peut être enregitré!',
         buttons: ['OK']
       });
 
       await alert.present();
 
       // Rejetez la promesse pour éviter d'ajouter le document incorrect
       return Promise.reject('Les champs obligatoires ne sont pas définis.');
     }

   //VERIFICATION DOUBLONS//////////////////////////////////////////

    if(check){
      const data = collection(this.firestore, "Even");
      return  await addDoc(data, {
        type: evenement.type,
        lieu: evenement.lieu,
        heure: evenement.heure,
        description: evenement.description,
        date : evenement.date,
      });
    }else{
      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Attention, Date simillaire non enregistrable',
        buttons: ['OK']
      });
      await alert.present();
      return "";
    }

  }
//////////////////////RECUPERATION EVENEMENT ///////////////////////////////////
getlistevenment(){
  const document = collection(this.firestore,"Even" )
  return collectionData(document,{idField: 'id'});
}

/////////////MODIFICATION ///////////////////////////////
async updateeven(index: string, evenement:any){
  const modal = await this.alertController.create({
    header : 'Modification',
    inputs : [{
      name : 'type',
      type: 'text',
      value : evenement.type
    },
    {
      name: 'lieu',
      type : 'text',
      value : evenement.lieu
    },
    {
      name: 'date',
      type : 'date',
      value: evenement.date
    },
    {
      name : 'heure',
      type: 'time',
      value: evenement.heure
    },
    {
      name : 'description',
      type: 'text',
      value: evenement.description
    },
  ],
  buttons : [{
    text : 'Annuler',
    role : 'cancel'
  },{
    text : 'Modefier',
    handler :async(data) => {
      try{
        const evenDoc = doc(this.firestore, 'Even', index);
        await updateDoc(evenDoc,{
          type: data.type,
          lieu: data.lieu,
          date: data.date,
          heure: data.heure,
          description : data.description });
          //Afficher le message d'erreur
          const confirmation = await this.alertController.create({
            header : 'Confirmation',
            message: 'Modification reussi',
            buttons:['Ok'],
          });
          await confirmation.present();
      }catch(error){
        console.error('Erreur lors de la modification:' , error);
        //Afficher un mesage
        const erreur = await this.alertController.create({
          header: 'Erreur',
          message: 'Erreure produite',
          buttons : ['Ok']
        });
        await erreur.present();
      }
      
    },
  }
],
  });
  await modal.present();
}

///////////////////////////// SUPPRESSION////////////////////////////////////
async deleteEvenById(evenId: string): Promise<void> {
  try {
    const documentRef = doc(this.firestore, 'Even', evenId);
    
    // Désactivez le bouton "Supprimer" jusqu'à ce que l'utilisateur fasse un choix dans la boîte de dialogue
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
            try {
              // Supprimez le document
              await deleteDoc(documentRef);
              // Suppression réussie,  afficher un message de confirmation ici si nécessaire
            } catch (error) {
              console.error('Erreur lors de la suppression : ', error);
            }
          },
        },
      ],
    });

    // Affichez la boîte de dialogue
    await supp.present();
  }
   catch (error) {
    console.error('Erreur lors de la création de la boîte de dialogue : ', error);
  }
}

}
