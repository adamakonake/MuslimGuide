import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AjoutannonceService } from '../services/ajoutannonce.service';
import { Annonce } from 'src/app/users/models/annonce';




@Component({
  selector: 'app-ajoutannonces',
  templateUrl: './ajoutannonces.page.html',
  styleUrls: ['./ajoutannonces.page.scss'],
})
export class AjoutannoncesPage implements OnInit {

  addannonceForm = this.formBuilder.group({
    date: [new Date (), Validators.required],
    nomMosquee: ['', Validators.required],
    heurePreche:['',Validators.required],
    heureTabsir: ['', Validators.required],

  })

  constructor( private formBuilder : FormBuilder,
                private ajoutannonce: AjoutannonceService) { }

  ngOnInit() {}

  onSubmit(){
    const mosquee = new Annonce(
      this.addannonceForm.value.date!,
      this.addannonceForm.value.nomMosquee!,
      this.addannonceForm.value.heurePreche!,
      this.addannonceForm.value.heureTabsir!
    )
    console.log(this.addannonceForm.value)
    console.log(this.ajoutannonce.addannonce(mosquee));
  }

}
