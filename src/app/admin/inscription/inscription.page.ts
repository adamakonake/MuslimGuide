import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  passwordType : string  = 'password';
  passwordShown : boolean  = false;

  constructor() { }

  ngOnInit() {
  }

  // pour le password pour le cachée 
  public togglePassword() {
    this.passwordShown = !this.passwordShown;
    this.passwordType = this.passwordShown ? 'text' : 'password';

    if (this.passwordShown) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

}
