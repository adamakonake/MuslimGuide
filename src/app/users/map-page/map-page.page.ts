import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
//import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { Geolocation } from '@capacitor/geolocation';
import { Icon, Marker, icon } from 'leaflet';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.page.html',
  styleUrls: ['./map-page.page.scss'],
})
export class MapPagePage implements OnInit {

  map : any;
  private defaultIcon: Icon = icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png"
  });

  constructor() { }

  ngOnInit() {
    
    Geolocation.getCurrentPosition().then((result) =>{

      setTimeout(()=>{
        Marker.prototype.options.icon = this.defaultIcon;
      this.map = L.map("map").setView([result.coords.latitude, result.coords.longitude], 19);
      // this.map.panTo([result.coords.latitude, result.coords.longitude]);
      // console.log(result.coords.latitude+" "+result.coords.longitude)
      // const markPoint = L.marker([result.coords.latitude,result.coords.longitude]);
      // markPoint.bindPopup('<p>Vous</p>')
      // this.map.addLayer(markPoint);
      // this.map.panTo(L.latLng(12.632895, -8.028002));

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      L.Routing.control({
        waypoints: [L.latLng(result.coords.latitude,result.coords.longitude), L.latLng(12.632895, -8.028002)],
        // routeWhileDragging: true
      }).addTo(this.map);
    },3000);

    // L.Routing.control({
    //   waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
    //   routeWhileDragging: true
    // }).addTo(this.map);
    

    })

    
  }

}
