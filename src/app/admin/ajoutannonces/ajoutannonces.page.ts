import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { SharedDataService } from '../shared-data.service';
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

  constructor( private formBuilder: FormBuilder, private ajoutannonce: AjoutannonceService, private router : Router,private ajoutrService : AjoutannonceService,
              ) { }

  ngOnInit() {
    //  this.annoncee = this.ajoutrService.getlistannonce()
    //this.getData();
  }
  async getData(){
    return this.ajoutannonce.getlistannonce()
  }

  onSubmit(){
    const mosquee = new Annonce(
      this.addannonceForm.value.date!,
      this.addannonceForm.value.nomMosquee!,
      this.addannonceForm.value.heurePreche!,
      this.addannonceForm.value.heureTabsir!
    )
    console.log(this.addannonceForm.value)
    this.ajoutannonce.addannonce(mosquee);
    this.addannonceForm.reset();
    this.router.navigateByUrl("/listeannonces")
    
  };
  //ajouter l'annonce à la liste 
  

}
