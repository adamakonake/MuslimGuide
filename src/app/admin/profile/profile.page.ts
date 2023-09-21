import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  admin : any;

  constructor(private route:Router, private activatedRoute : ActivatedRoute, private inscriptionService : InscriptionService, private auth : Auth) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get("id")
      this.inscriptionService.getAdminId(id).subscribe((result:any)=>{
        this.admin = result;
        // console.log("adminacc ",this.admin)
      })
    })
  }

  goToUpdatePassword() {
    this.route.navigateByUrl("update-password");
  }

  goToUpdateEmail() {
    this.route.navigateByUrl("update-email");
  }

  logout(){
    this.auth.signOut();
    this.route.navigateByUrl("/connexion");
  }



}