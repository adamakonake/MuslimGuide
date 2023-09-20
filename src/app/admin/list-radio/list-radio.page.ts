import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AlertController, AnimationController, ModalController, NavController, } from '@ionic/angular';

import { RadioService } from '../services/radio.service';

// import { AlertController, ModalController, NavController } from '@ionic/angular';
import { AjoutDesRadiosPage } from '../ajout-des-radios/ajout-des-radios.page';
import { doc, updateDoc, deleteDoc, Firestore } from '@firebase/firestore';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Radio } from './mode';
// import { Radio } from '../ajout-des-radios/mode';


@Component({
  selector: 'app-list-radio',
  templateUrl: './list-radio.page.html',
  styleUrls: ['./list-radio.page.scss'],
})
export class ListRadioPage implements OnInit {
  ajoutRadio: FormGroup;
  isModalOpen = false;
  radios: any;
  raioFilter: any;
  firestore!: Firestore;
  submitted = false;


  constructor(private fb: FormBuilder,
    private radioService: RadioService,
    private animationCtrl: AnimationController,
    private toastr: ToastrService,
    public alertController: AlertController,
    public modalController: ModalController,
    public navCtrl: NavController,
  ) {
    this.ajoutRadio = this.fb.group({
      nom: ['', Validators.required],
      frequence: ['', Validators.required]
    });

  }

  async submit() {
    this.submitted = true;
    if (this.ajoutRadio.valid) {

      const newRadio = new Radio(
        this.ajoutRadio.value.nom!,
        this.ajoutRadio.value.frequence!,
      )
      const response = this.radioService.addRadio(newRadio);
      if (await response == "erreur") {
        const alert = await this.alertController.create({
          header: 'Erreur',
          message: 'Attention cette radio exist déjà!!!! ',
          buttons: ['OK'],
          cssClass: 'custom-alert'
        });
        await alert.present();
        // return Promise.reject("champs obligatoire");


      } else {
        this.ajoutRadio.reset();
        this.submitted = false;
        await this.modalController.dismiss();
      }

    } else {

      console.log("error");
      return
    }

  }

  ngOnInit() {
    this.filterByNom();
    this.radioService.getRadio().subscribe((result) => {
      this.radios = result;
    })
    console.log(this.radios);
  }
  removeRadio(index: number) {
    //this.radios.splice(index, 1);
    this.radioService.removeRadio(this.radios[index].id)
  }

  modifierRadio(index: number) {
    this.radioService.updateRadio(this.radios[index].id, this.radios[index])
  }


  // ::::::::::::::::::::::::::::::::::::traitement poppup pour animation::::::::::::::::::::::::::::::
  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::filtre par nom:::::::::::::::::::::

  filterByNom() {

    this.radioService.getRadio().subscribe((result) => {
      this.radios = result;
      this.raioFilter = result;
      console.log(this.radios)


      //trier par ordre alphabetique
      this.radios.sort(
        (
          a: { radioA: string; },
          b: { radioB: string; }
        ) => {
          const radioA = a.radioA;
          const radioB = b.radioB;

          if (radioA < radioB) {
            return -1;
          }
          if (radioA > radioB) {
            return 1;
          }
          return 0;
        });
    })
  
  }

  // :::::::::::::::::::::::::::::::::::::::::::::::bar de recherche:::::::::::::::::::::::::::::::
  onSearch(ev: any) {
     ev.target.value;
     this.radios = this.raioFilter;
     console.log(this.radios + "radios selected");
    const filteredData = this.radios.filter((rdio: any) => rdio.nom.includes(ev.target.value));
    this.radios = filteredData;
    console.log(filteredData);

  }

}

