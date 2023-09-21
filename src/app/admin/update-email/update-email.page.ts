import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.page.html',
  styleUrls: ['./update-email.page.scss'],
})
export class UpdateEmailPage implements OnInit {


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
    newEmail : ['', Validators.required],
    password : ['', Validators.required]
  })


  constructor(private formBuilder : FormBuilder) { }

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

}
