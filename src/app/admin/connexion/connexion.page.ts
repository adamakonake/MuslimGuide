import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InscriptionService } from 'src/app/services/inscription.service';
import { MosqueeService } from 'src/app/users/services/mosquee.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  passwordType : string  = 'password';
  passwordShown : boolean  = false;
  /*password!:string;
  email!:string;*/
  formData: any = {};
  admininfo=[
    {email:'amadouit223@gmail.com', password:'1234567890'},
      {email:'cptbarbossa23@gmail.com', password:'1234567890'},
  ];

  connexionForm = this.formBuilder.group({
    email : ['', Validators.required],
    password : ['', Validators.required]
  })

  constructor(private inscriptionService : InscriptionService, private formBuilder : FormBuilder) { }

  ngOnInit() {
  }

  // pour le password pour
  public togglePassword() {
    this.passwordShown = !this.passwordShown;
    this.passwordType = this.passwordShown ? 'text' : 'password';

    if (this.passwordShown) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
  Submit(){
    //   const admin = this.admininfo.find(admin => admin.email === this.formData.email && admin.password === this.formData.password);
    // console.log(this.formData);
    // if (admin) {
    //   console.log('Admin authenticatifié!');
    // } else {
    //   console.log('Admin non authenticatifié!');
    // }
    const email = this.connexionForm.value.email!;
    const password = this.connexionForm.value.password!;
    console.log(this.inscriptionService.logIn(email,password))

  }

}
