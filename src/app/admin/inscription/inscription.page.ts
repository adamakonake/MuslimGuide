import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  passwordType : string  = 'password';
  passwordShown : boolean  = false;
  FormData:any ={};
  NouveauUtilisateur:any =[];
  constructor() { }

  ngOnInit() {
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
