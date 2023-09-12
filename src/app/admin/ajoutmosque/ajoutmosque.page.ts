import { Component, OnInit } from '@angular/core';
import { MosqueeService } from 'src/app/users/services/mosquee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Mosquee } from 'src/app/users/models/mosquee';
import { HorairesPrière } from 'src/app/users/models/horaires-prière';
// import {AngularFireStore} from '@angular/fire/firestore'

@Component({
  selector: 'app-ajoutmosque',
  templateUrl: './ajoutmosque.page.html',
  styleUrls: ['./ajoutmosque.page.scss'],
})
export class AjoutmosquePage implements OnInit {

 
  createMosqueeForm = this.formBuilder.group({
    nom: ['', Validators.required],
    adresse: ['', Validators.required],
    imam:['',Validators.required],
    longitude: [0, Validators.required],
    latitude: [0, Validators.required],
    fadjr:['',Validators.required ],
    zohr:['',Validators.required],
    asri:['',Validators.required],
    magreb:['',Validators.required],
    isha:['',Validators.required],
    djouma:['',Validators.required],
  });

  constructor(
    private formBuilder : FormBuilder,
    private mosqueeService:MosqueeService
  ) {}
  onSubmit(){
    const mosquee = new Mosquee(
      this.createMosqueeForm.value.nom!,
      this.createMosqueeForm.value.adresse!,
      this.createMosqueeForm.value.imam!,
      this.createMosqueeForm.value.longitude!,
      this.createMosqueeForm.value.latitude!,
      //  this.createMosqueeForm.value.fadjr!,
      //  this.createMosqueeForm.value.zohr!,
      //  this.createMosqueeForm.value.asri!,
      //  this.createMosqueeForm.value.magreb!,
      //  this.createMosqueeForm.value.isha!,
      //  this.createMosqueeForm.value.djouma!

    )
    const horaires = new HorairesPrière(
      this.createMosqueeForm.value.fadjr!,
      this.createMosqueeForm.value.zohr!,
      this.createMosqueeForm.value.asri!,
      this.createMosqueeForm.value.magreb!,
      this.createMosqueeForm.value.isha!,
      this.createMosqueeForm.value.djouma!
    )
    console.log(this.createMosqueeForm.value)
    console.log(this.mosqueeService.createMosquee(mosquee, horaires));
  }
  // async createMosquee() {
  //   const loading = await this.loadingCtrl.create();

  // const nom = this.createMosqueeForm.value.nom;
  // const adresse = this.createMosqueeForm.value.adresse;
  // const longitude = this.createMosqueeForm.value.longitude;
  // const latitude = this.createMosqueeForm.value.latitude;

  // this.mosqueeService
  // .createMosquee(nom, adresse, longitude, latitude)
  // .then(
  //   () => {
  //     loading.dismiss().then(() => {
  //       this.router.navigateByUrl('');
  //     });
  //   },
  //   error => {
  //     loading.dismiss().then(() => {
  //       console.error(error);
  //     });
  //   }
  // );

  // return await loading.present();
  //  }

  
  ngOnInit() {
    this.getData()
    
  }

  async getData(){
    return this.mosqueeService.getMosquee()
  }


}
