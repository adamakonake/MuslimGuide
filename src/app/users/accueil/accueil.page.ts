import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor( private route : Router) { }

  ngOnInit() {
  }

  goToHijri(){
    this.route.navigateByUrl("/hidjri")
  }

}
