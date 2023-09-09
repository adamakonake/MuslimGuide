import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { async } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  apiKey = "ee179fc833ed4af9ad062cfabc51004b";
  test:string = "salut"
  constructor( private route : Router, private http : HttpClient) { }

  ngOnInit() {
    Geolocation.getCurrentPosition().then((result) =>{
      this.http.get("https://api.opencagedata.com/geocode/v1/json?q="+result.coords.latitude+"+"+result.coords.longitude+"&key="+this.apiKey).subscribe((data : any) =>{
        //console.log(data)
        this.test = data.results[0].components.suburb;
        //console.log(data)
        console.log(result.coords.latitude+" "+result.coords.longitude);
      })
    })
  }
  

  goToHijri(){
    this.route.navigateByUrl("/hidjri")
  }

  goToChapelet(){
    this.route.navigateByUrl("/chapelet")
  }

}
