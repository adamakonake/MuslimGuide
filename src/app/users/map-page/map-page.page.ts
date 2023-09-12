import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
//import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { Geolocation } from '@capacitor/geolocation';
import { Icon, Marker, icon } from 'leaflet';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.page.html',
  styleUrls: ['./map-page.page.scss'],
})
export class MapPagePage implements OnInit, OnDestroy {

  map : any;
  routing : any;
  private defaultIcon: Icon = icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png"
  });

  watchCoordinate : any;
    watchId : any;
    coordinate : any;
  constructor(private zone : NgZone ) { }
  ngOnDestroy(): void {
    if(this.watchId != null)
      Geolocation.clearWatch({id : this.watchId})
  }

  ngOnInit() {

    setTimeout(()=>{
      Geolocation.getCurrentPosition().then((result) =>{

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
            routeWhileDragging: true
        }).addTo(this.map);
      });
    },3000);

    // try{
    //   this.watchId = Geolocation.watchPosition({}, (position, err) =>{
    //     console.log("watch", position);
    //     this.zone.run(()=>{
    //       this.watchCoordinate = {
    //         latitude : position?.coords.latitude,
    //         longitude : position?.coords.longitude,
    //       };
    //       this.routing.options.waypoints[0].latitude = this.watchCoordinate.latitude;
    //       this.routing.options.waypoints[0].longitude = this.watchCoordinate.longitude;
    //     });
    //   })
    // }catch(e){
    //   console.log(e);
    // }
    
    // Geolocation.getCurrentPosition().then((result) =>{

    //   Marker.prototype.options.icon = this.defaultIcon;
    //   this.map = L.map("map").setView([result.coords.latitude, result.coords.longitude], 19);
    // // this.map.panTo([result.coords.latitude, result.coords.longitude]);
    // // console.log(result.coords.latitude+" "+result.coords.longitude)
    // // const markPoint = L.marker([result.coords.latitude,result.coords.longitude]);
    // // markPoint.bindPopup('<p>Vous</p>')
    // // this.map.addLayer(markPoint);
    // // this.map.panTo(L.latLng(12.632895, -8.028002));

    //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //     attribution:
    //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   }).addTo(this.map);

    //   L.Routing.control({
    //     waypoints: [L.latLng(result.coords.latitude,result.coords.longitude), L.latLng(12.632895, -8.028002)],
    //     routeWhileDragging: true
    // }).addTo(this.map);
    

    // L.Routing.control({
    //   waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
    //   routeWhileDragging: true
    // }).addTo(this.map);
    

    //})

    
  }

}
