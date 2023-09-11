import { Component, OnInit } from '@angular/core';


import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Radio } from './mode';
import { RadioService } from '../services/radio.service';


@Component({
  selector: 'app-ajout-des-radios',
  templateUrl: './ajout-des-radios.page.html',
  styleUrls: ['./ajout-des-radios.page.scss'],
})
export class AjoutDesRadiosPage implements OnInit {

  ajoutRadio: FormGroup;
  

  ngOnInit() {
    
  }

  constructor(private fb: FormBuilder, private radioService: RadioService, ) {
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
    console.log(this.ajoutRadio.value + "je trouve quelque chose")
    console.log(this.radioService.addRadio(newRadio));
  
   }
  
}
  
  


