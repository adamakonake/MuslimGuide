import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inscription } from './model';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  inscription: FormGroup;

  passwordType : string  = 'password';
  passwordShown : boolean  = false;
  FormData:any ={};
  NouveauUtilisateur:any =[];

  constructor(private fb: FormBuilder, private inscriptionService: InscriptionService ) {
    this.inscription = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      telephone: ['', Validators.required],
      
    });
  }

   ngOnInit() {
  }
  submit(){
    const newInscription = new Inscription(
      "",
      this.inscription.value.nom!,
      this.inscription.value.prenom!,
      this.inscription.value.email!,
      this.inscription.value.password!
    )
    
    console.log(this.inscriptionService.addInscription(newInscription));
    // console.log(this.inscription.value + "je trouve quelque chose")
    // console.log(this.inscriptionService.addInscription(newInscription));

  }



  public togglePassword() {
    this.passwordShown = !this.passwordShown;
    this.passwordType = this.passwordShown ? 'text' : 'password';

    if (this.passwordShown) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

   Submit() {
    const utilisateurDonnees=this.FormData;
  }


}
