import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';


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
  // admininfo=[
  //   {email:'amadouit223@gmail.com', password:'1234567890'},
  //     {email:'cptbarbossa23@gmail.com', password:'1234567890'},
  // ];

  connexionForm = this.formBuilder.group({
    email : ['', Validators.required],
    password : ['', Validators.required]
  })

  constructor(private inscriptionService : InscriptionService, private formBuilder : FormBuilder,private route:Router, private auth:Auth) { }

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
  async Submit(){
 
    const email = this.connexionForm.value.email!;
    const password = this.connexionForm.value.password!;
    // this.inscriptionService.logIn(email,password)
      //     const auth = getAuth();
      // let signInMethods = await fetchSignInMethodsForEmail(email, password);
      // if (signInMethods.length > 0) {
      //   //user exists
      //   this.route.navigateByUrl("admin-accueil");
      // } 
      // else {
        
      //   // this.route.navigateByUrl("admin-accueil");
      // }
    // try {
       this.inscriptionService.logIn(email, password);
    //    this.connexionForm.reset();
    //   //  if(this.auth.){

    //   //  }
    //   // User is logged in, you can navigate to another page or perform other actions
    // } catch (error) {
    //   // Handle login error (e.g., display an error message to the user)
    //   console.log(error);
    // }
    
    console.log(this.inscriptionService.logIn(email,password))

  }

    


   
  

}
