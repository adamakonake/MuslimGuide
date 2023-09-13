import { Component, OnInit } from '@angular/core';
import { RadioService } from '../services/radio.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { AjoutDesRadiosPage } from '../ajout-des-radios/ajout-des-radios.page';
import { doc, updateDoc, deleteDoc, Firestore } from '@firebase/firestore';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Radio } from '../ajout-des-radios/mode';

@Component({
  selector: 'app-list-radio',
  templateUrl: './list-radio.page.html',
  styleUrls: ['./list-radio.page.scss'],
})
export class ListRadioPage implements OnInit {
  recherche:string= '';
  radios:any;
  firestore!: Firestore;
  // searchControl = new FormControl();
  // items$: Observable<any[]> | undefined;
  // radios=[
  //   {nom: 'RADIO DAMBE', frequence:'90.6',index:0},
  //   {nom: 'RADIO KLEDOU', frequence:'84.6',index: 1},
  //   {nom: 'RADIO RENOUVEAU', frequence:'91.8',index: 2},
  // ];

  constructor( private radioService: RadioService,
    public alertController: AlertController,
    public modalController: ModalController,
    public navCtrl: NavController,) { }
  get fmFilterer(){
    return this.radios.map((radio: { nom: any; frequence: any; }, index: any) =>({nom:radio.nom,frequence:radio.frequence,index}))
    .filter(((radio: { nom: string; })=>radio.nom.toLowerCase().includes(this.recherche.toLowerCase())));
  }
  ngOnInit() {
    this.radioService.getRadio().subscribe((result)=>{
      this.radios = result;
    })
    console.log(this.radios);
  }
  removeRadio(index: number) {
    //this.radios.splice(index, 1);
    this.radioService.removeRadio(this.radios[index].id)
  }

  modifierRadio( index: number){
    this.radioService.updateRadio(this.radios[index].id,this.radios[index])
  }

  // async removeRadio(index: number) {
  //   const alert = await this.alertController.create({
  //     header: 'Confirmation',
  //     message: 'Voulez-vous vraiment supprimer cette radio ?',
  //     buttons: [
  //       {
  //         text: 'Annuler',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //       }, {
  //         text: 'Supprimer',
  //         handler: () => {
  //           this.radios.splice(index, 1);
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  // async removeRadio(index: number) {}


  


}

  // supprimer(radios:{nom:string,frequence:string,index:number}) {

  // }

