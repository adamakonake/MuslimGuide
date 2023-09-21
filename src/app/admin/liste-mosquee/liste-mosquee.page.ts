
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, AnimationController, ModalController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { HorairesPrière } from 'src/app/users/models/horaires-prière';
import { Mosquee } from 'src/app/users/models/mosquee';
import { MosqueeService } from 'src/app/users/services/mosquee.service';

@Component({
  selector: 'app-liste-mosquee',
  templateUrl: './liste-mosquee.page.html',
  styleUrls: ['./liste-mosquee.page.scss'],
})
export class ListeMosqueePage implements OnInit {

  createMosqueeForm: FormGroup;
  mosquee: any;
  searchTerm: string = '';
  submitted = false;

  ngOnInit() {
    this.mosqueeService.getMosquee().subscribe((result: any[]) => {
      console.log(this.mosqueeService.getMosquee() + " successfully")
      //const docc = doc(this.firestore,result.horaire)
      let mosquee: any[] = [];
      console.log(result)
      result.forEach(mosque => {
        //const documentRef = doc(this.firestore, mosque.horaire.path)
        mosque.horaire = mosque.horaire.path
        mosquee.push(mosque);
      })
      //console.log(mosquee)
      this.mosquee = mosquee;
    })

    this.mosqueeService.getMosquee().subscribe((result: any[]) => {
      this.mosquee = result;
    });
  }

  // :::::::::::::::::::::::::::::::::::::::::poppup ajout mosquee formullaire::::::::::::::::::::::::::::
  constructor(
    private formBuilder: FormBuilder,
    private mosqueeService: MosqueeService,
    private animationCtrl: AnimationController,
    private toastr: ToastrService,
    private elementRef: ElementRef,
    public alertController: AlertController,
    public modalController: ModalController
  ) {
    this.createMosqueeForm = this.formBuilder.group({
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
  }


  // button click pour ajouter 
  async onSubmit() {
    // this.submitted = true;
    console.log("onSubmit")
    if (this.createMosqueeForm.valid) {
      console.log("form")

      const mosquee = new Mosquee(
        this.createMosqueeForm.value.nom!,
        this.createMosqueeForm.value.adresse!,
        this.createMosqueeForm.value.imam!,
        this.createMosqueeForm.value.longitude!,
        this.createMosqueeForm.value.latitude!,
      )

      const horaires = new HorairesPrière(
        this.createMosqueeForm.value.fadjr!,
        this.createMosqueeForm.value.zohr!,
        this.createMosqueeForm.value.asri!,
        this.createMosqueeForm.value.magreb!,
        this.createMosqueeForm.value.isha!,
        this.createMosqueeForm.value.djouma!
      )
      const response = this.mosqueeService.createMosquee(mosquee, horaires);
      if (await response == "Error") {
        console.log('je suis dubliquee')
        const alert = await this.alertController.create({
          header: 'Erreur',
          message: 'Attention cette mosquee exist déjà!!!! ',
          buttons: ['OK'],
          cssClass: 'custom-alert'
        });
        await alert.present();

        // console.log(this.createMosqueeForm.value)
        // console.log(this.mosqueeService.createMosquee(mosquee, horaires));

      } else {

        this.createMosqueeForm.reset();
        // this.submitted = false;
        await this.modalController.dismiss();

      }

    } else {
      console.log("Error")
      return

    }
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

  searchMosque(searchTerm: string) {
    if (!searchTerm) {
      return this.mosquee;
    }

    return this.mosquee.filter((mosque: { name: string; }) =>
      mosque.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  highlight(text: string, search: string): string {
    if (!search) {
      return text;
    }

    const pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    const regex = new RegExp(pattern, "gi");
    return text.replace(regex, match => `<b>${match}</b>`);
  }

  sortMosque(searchTerm: string) {
    if (!searchTerm) {
      return this.mosquee;
    }
    return this.mosquee.sort((a: any, b: { nom: string; }) =>
      b.nom.toLowerCase().includes(searchTerm.toLowerCase()) ? 1 : -1
    );
  }

  modifierMosquee(index: number) {
    this.mosqueeService.updateMosque(this.mosquee[index].id, this.mosquee[index])
  }

  supprimerMosquee(index: number) {
    this.mosqueeService.removeMosque(this.mosquee[index].id,)
  }

}

