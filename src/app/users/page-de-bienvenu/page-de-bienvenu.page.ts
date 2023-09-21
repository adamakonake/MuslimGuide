import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import {NavigationBar} from '@capgo/capacitor-navigation-bar'

@Component({
  selector: 'app-page-de-bienvenu',
  templateUrl: './page-de-bienvenu.page.html',
  styleUrls: ['./page-de-bienvenu.page.scss'],
})
export class PageDeBienvenuPage implements OnInit {

  constructor(private route : Router){}

  ngOnInit() {
    StatusBar.setBackgroundColor({color : "#25A069"})
    NavigationBar.setNavigationBarColor({color : "#E5E5E5"})
  }

  goToAccueil(){
    this.route.navigateByUrl("/accueil")
  }

  goToLogin(){
    this.route.navigateByUrl("/connexion")
  }

}
