import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Radio } from './mode';
import { RadioService } from '../services/radio.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-ajout-des-radios',
  templateUrl: './ajout-des-radios.page.html',
  styleUrls: ['./ajout-des-radios.page.scss'],
})
export class AjoutDesRadiosPage implements OnInit {

  ajoutRadio: FormGroup;
  radio: Radio[] = [];

  ngOnInit() {
    //  this.radioService.getlist( )
  }

  constructor(private fb: FormBuilder, private radioService: RadioService, ) {
    this.ajoutRadio = this.fb.group({
      nom: ['', Validators.required],
      frequence: ['', Validators.required]
    });
   }
   
   
  
   submit(){
    if(this.ajoutRadio.valid){
      // this.radioService.addRadio(this.ajoutRadio.value);
      // const newRadio = this.ajoutRadio.value;
      // const form : Radio ={
      //   nom: newRadio.nom,
      //   frequence: newRadio.frequence
      // }
      
      console.log( +" " + ": Radio");
      
      }
      
      
      // .then(() => {
      //   console.log('Radio ajoutée avec succès à Firebase.');
      // })
      // .catch((error) => {
      //   console.error('Erreur lors de l\'ajout de la radio à Firebase :', error);
      // });
  }
      
}
  
  


