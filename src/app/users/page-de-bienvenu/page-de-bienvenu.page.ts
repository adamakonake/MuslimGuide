import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-de-bienvenu',
  templateUrl: './page-de-bienvenu.page.html',
  styleUrls: ['./page-de-bienvenu.page.scss'],
})
export class PageDeBienvenuPage implements OnInit {

  constructor(private route : Router){}

  ngOnInit() {
  }

  goToAccueil(){
    this.route.navigateByUrl("/accueil")
  }

  goToLogin(){
    this.route.navigateByUrl("/connexion")
  }

}
