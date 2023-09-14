import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Qibla } from './model';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';

@Component({
  selector: 'app-kaba',
  templateUrl: './kaba.page.html',
  styleUrls: ['./kaba.page.scss'],
})
export class KabaPage implements OnInit {

  apiKey = "ee179fc833ed4af9ad062cfabc51004b";

  qiblaLocation = 0;
  public data: any;
  accelHandler! : PluginListenerHandle;
  
  

  constructor(private route : Router, private http : HttpClient) { 
    
  }
  
  

  ngOnInit() {
    Geolocation.getCurrentPosition().then((result) =>{
      this.http.get("https://api.opencagedata.com/geocode/v1/json?q="+result.coords.latitude+"+"+result.coords.longitude+"&key="+this.apiKey).subscribe((data : any) =>{
        // //console.log(data)
        // data.results[0].annotations.qibla;
        console.log(data.results[0].annotations.qibla+" "+"je trouver la position");
        //this.qiblaLocation = data.results[0].annotations.qibla;
        // //console.log(data)
        // //console.log(result.coords.latitude+" "+result.coords.longitude);
        // this.data = data.results[0].annotations.qibla;
        // deviceOrientationEvent : function(){
    
        // }
        
      })
    })
    window.addEventListener("deviceorientationabsolute", (e : any)=>{
      console.log(e);
      //this.data = "alpha "+Math.floor(e.alpha)+" beta "+Math.floor(e.beta) +" gamma"+Math.floor(e.gamma);
      this.qiblaLocation = e.alpha>360 ? e.alpha%360 : e.alpha
    }, true);
    //this.orientation();
  } 


  // async orientation(){
  //   this.accelHandler = await Motion.addListener('orientation', event => {
  //     console.log('Device motion event:', event);
  //     this.data = event.alpha+" "+event.beta+" "+event.gamma;
  //   });
  // }

}
