import { Component, OnInit } from '@angular/core';


import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Radio } from '../list-radio/mode';
import { RadioService } from '../services/radio.service';


@Component({
  selector: 'app-ajout-des-radios',
  templateUrl: './ajout-des-radios.page.html',
  styleUrls: ['./ajout-des-radios.page.scss'],
})
export class AjoutDesRadiosPage implements OnInit {

  ajoutRadio: FormGroup;
  route: any;
  radio:any[]=[];
  isEditing: boolean = false;
  index:any;

  constructor(private fb: FormBuilder, private radioService: RadioService, ) {
    this.ajoutRadio = this.fb.group({
      nom: ['', Validators.required],
      frequence: ['', Validators.required]
    });
   }

  ngOnInit( ) {
    // this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
    //   let index = params.get('index');
    //   if (index) {
    //     this.radio = this.radioService.getRadio();
    //     this.isEditing = true;
    //   } else {
    //     this.isEditing = false;
    //   }
    // });
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




