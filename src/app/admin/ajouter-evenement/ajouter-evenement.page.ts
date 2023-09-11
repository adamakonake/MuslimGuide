import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AjoutenvenService } from 'src/app/services/ajoutenven.service';
import { Even } from 'src/app/users/models/even';

@Component({
  selector: 'app-ajouter-evenement',
  templateUrl: './ajouter-evenement.page.html',
  styleUrls: ['./ajouter-evenement.page.scss'],
})
export class AjouterEvenementPage implements OnInit {
  addevenForm = this.formbuider.group({
    type : ['', Validators.required],
    lieu : ['', Validators.required],
    date : [new Date, Validators.required],
    heure : ['' , Validators.required],
    description : ['', Validators.required]
  })

  constructor( private formbuider: FormBuilder,
              private ajouteven : AjoutenvenService) { }


  ngOnInit() {}

  onSubmit(){
    console.log("je suis dedans")
    const even = new Even(
      this.addevenForm.value.type!,
      this.addevenForm.value.lieu!,
      this.addevenForm.value.date!,
      this.addevenForm.value.heure!,
      this.addevenForm.value.description!
      
    )
      
    console.log(this.addevenForm.value)
    console.log(this.ajouteven.ajoutenven(even));
  }
}
