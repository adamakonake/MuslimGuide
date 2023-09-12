import { Component, OnInit } from '@angular/core';
import { AjoutDesRadiosPage } from '../ajout-des-radios/ajout-des-radios.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RadioService } from '../services/radio.service';
import { Radio } from './mode';
import { ToastrService } from 'ngx-toastr';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-list-radio',
  templateUrl: './list-radio.page.html',
  styleUrls: ['./list-radio.page.scss'],
})
export class ListRadioPage implements OnInit {
  ajoutRadio: FormGroup;
  isModalOpen = false;

  recherche:string= '';
  radios=[
    {nom: 'RADIO DAMBE', frequence:'90.6',index:0},
    {nom: 'RADIO KLEDOU', frequence:'84.6',index: 1},
    {nom: 'RADIO RENOUVEAU', frequence:'91.8',index: 2},
  ];
  AjoutDesRadiosPage: any;

  constructor(private fb: FormBuilder, 
    private radioService: RadioService, 
    private animationCtrl: AnimationController,
    private toastr: ToastrService
     )
     {
    this.ajoutRadio = this.fb.group({
      nom: ['', Validators.required],
      frequence: ['', Validators.required]
    });

   }

   submit(){
    const newRadio = new Radio(
      this.ajoutRadio.value.nom!,
      this.ajoutRadio.value.frequence!,

    )
    this.toastr.success('Radio ajouter avec succès !', 'Succès' , {positionClass: 'toast-bottom-center', toastClass: 'toast-success', timeOut: 300000000});
    console.log(this.ajoutRadio.value + "je trouve quelque chose")
    console.log(this.radioService.addRadio(newRadio));
  
   }
   
  get fmFilterer(){
    return this.radios.map((radio, index) =>({nom:radio.nom,frequence:radio.frequence,index})).filter((radio=>radio.nom.toLowerCase().includes(this.recherche.toLowerCase())));
  }
  ngOnInit() {
  }

  supprimer(radios:{nom:string,frequence:string,index:number}) {

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

}
