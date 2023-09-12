import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Qibla } from './model';

@Component({
  selector: 'app-kaba',
  templateUrl: './kaba.page.html',
  styleUrls: ['./kaba.page.scss'],
})
export class KabaPage implements OnInit {

  apiKey = "ee179fc833ed4af9ad062cfabc51004b";

  public qiblaLocation = 0;
  public data: any;
  
  

  constructor(private route : Router, private http : HttpClient) { 
    
  }
  
  

  ngOnInit() {
    Geolocation.getCurrentPosition().then((result) =>{
      this.http.get("https://api.opencagedata.com/geocode/v1/json?q="+result.coords.latitude+"+"+result.coords.longitude+"&key="+this.apiKey).subscribe((data : any) =>{
        //console.log(data)
        data.results[0].annotations.qibla;
        console.log(data.results[0].annotations.qibla+" "+"je trouver la position");
        //console.log(data)
        //console.log(result.coords.latitude+" "+result.coords.longitude);
        this.data = data.results[0].annotations.qibla;
      })
    })
  }
  

}
