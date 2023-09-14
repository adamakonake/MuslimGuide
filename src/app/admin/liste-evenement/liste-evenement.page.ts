import { Even } from './../../users/models/even';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore } from '@firebase/firestore';
import { AjoutenvenService } from 'src/app/services/ajoutenven.service';
// import { Even } from 'src/app/users/models/even';

@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.page.html',
  styleUrls: ['./liste-evenement.page.scss'],
})
export class ListeEvenementPage implements OnInit {
  ajoutEvenement!: FormGroup;
  isModalOpen = false;
  even:any;
  firestore!: Firestore;

 ajoutevenement = this.formbuider.group({
    type : ['', Validators.required],
    lieu : ['', Validators.required],
    date : [new Date, Validators.required],
    heure : ['' , Validators.required],
    description : ['', Validators.required]
  })
  animationCtrl: any;
  addevenForm: any;
  toastr: any;

  constructor( private formbuider: FormBuilder,private ajouteven : AjoutenvenService) {

  }
  ngOnInit() {}

  onSubmit(){
    console.log("je suis de dans")
    const even = new Even(
      this.ajoutEvenement.value.type!,
      this.ajoutEvenement.value.lieu!,
      this.ajoutEvenement.value.date!,
      this.ajoutEvenement.value.heure!,
      this.ajoutEvenement.value.description!

    )
    this.toastr.success('Radio ajouter avec succès !', 'Succès' , {positionClass: 'toast-bottom-center', toastClass: 'toast-success', timeOut: 300000000});
    console.log(this.ajoutEvenement.value)
    console.log(this.ajouteven.ajoutenven(even));

  }
  // ::::::::::::::::::::::::::::::::::::traitement poppup pour animation:::::::::::::::::::::::::::::::::::::::::::::::::::
  enterAnimation = (baseEl: HTMLElement) => {
    console.log("je suis");
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
  // submit(){
  //   const newEven = new Even(
  //     this.ajoutevenement.value.type!,
  //     this.ajoutevenement.value.lieu!,
  //     this.ajoutevenement.value.date!,
  //     this.ajoutevenement.value.heure!,
  //     this.ajoutevenement.value.description!

  //   )
  //   this.toastr.success('Radio ajouter avec succès !', 'Succès' , {positionClass: 'toast-bottom-center', toastClass: 'toast-success', timeOut: 300000000});
  //   console.log(this.ajoutevenement.value + "je trouve quelque chose")
  //   console.log(this.ajoutevenement.ajoutenven(Even));

  //  }

}
