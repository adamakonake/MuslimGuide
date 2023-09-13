import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AnimationController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { Mosquee } from 'src/app/users/models/mosquee';
import { MosqueeService } from 'src/app/users/services/mosquee.service';

@Component({
  selector: 'app-liste-mosquee',
  templateUrl: './liste-mosquee.page.html',
  styleUrls: ['./liste-mosquee.page.scss'],
})
export class ListeMosqueePage implements OnInit {


  ngOnInit() {
  }

  // :::::::::::::::::::::::::::::::::::::::::poppup ajout mosquee formullaire::::::::::::::::::::::::::::





  createMosqueeForm = this.formBuilder.group({
    nom: ['', Validators.required],
    adresse: ['', Validators.required],
    imam: ['', Validators.required],
    longitude: [0, Validators.required],
    latitude: [0, Validators.required],
    fadjr: ['', Validators.required],
    zohr: ['', Validators.required],
    asri: ['', Validators.required],
    magreb: ['', Validators.required],
    isha: ['', Validators.required],
    djouma: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private mosqueeService: MosqueeService,
    private animationCtrl: AnimationController,
    private toastr: ToastrService,
    private elementRef: ElementRef
  ) { }
  // button click pour ajouter 
  onSubmit() {
    const mosquee = new Mosquee(
      this.createMosqueeForm.value.nom!,
      this.createMosqueeForm.value.adresse!,
      this.createMosqueeForm.value.imam!,
      this.createMosqueeForm.value.longitude!,
      this.createMosqueeForm.value.latitude!,
      // this.createMosqueeForm.value.fadjr!,
      // this.createMosqueeForm.value.zohr!,
      // this.createMosqueeForm.value.asri!,
      // this.createMosqueeForm.value.magreb!,
      // this.createMosqueeForm.value.isha!,
      // this.createMosqueeForm.value.djouma!

    )
    console.log(this.createMosqueeForm.value)
    console.log(this.mosqueeService.createMosquee(mosquee));
  }
  // ::::::::::::::::::::::::::::::::fin de traitement de formulaire :::::::::::::::::::::::::::::::::::::::::::
  isModalOpen = false;

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
