import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
//import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { Geolocation } from '@capacitor/geolocation';
import { Icon, Marker, icon } from 'leaflet';
import { MosqueeService } from '../services/mosquee.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.page.html',
  styleUrls: ['./map-page.page.scss'],
})
export class MapPagePage implements OnInit, OnDestroy {

  map : any;
  routing : any;
  private mosqueePositionIcon: Icon = icon({
    iconUrl : "../../assets/iconPositionMosque1.png"
  });
  private myPositionIcon: Icon = icon({
    iconUrl: "../../assets/iconMyPosition1.png"
  });
  // "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png"

  watchCoordinate : any;
    watchId : any;
    coordinate : any;
  mosquees : any;
  constructor(private zone : NgZone, private mosqueeService : MosqueeService) { }
  

  ngOnInit() {

    // setTimeout(()=>{
    //   Geolocation.getCurrentPosition().then((result) =>{
    //       this.watchCoordinate = {
    //       latitude : result.coords.latitude,
    //       longitude : result.coords.longitude
    //     };
    //       //Marker.prototype.options.icon = this.defaultIcon;
    //       this.map = L.map("map").setView([this.watchCoordinate.latitude, this.watchCoordinate.longitude], 19);

    //       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //         attribution:
    //           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       }).addTo(this.map);
    
    //       this.routing = L.Routing.control({
    //         waypoints: [L.latLng(this.watchCoordinate.latitude, this.watchCoordinate.longitude), L.latLng(12.632895, -8.028002)],
    //         routeWhileDragging: true
    //     }).addTo(this.map);
    //     console.log(this.map);
    //   });
    // },3000);

    Geolocation.getCurrentPosition().then((result) =>{
      //Marker.prototype.options.icon = this.defaultIcon;
      this.watchCoordinate = {
        latitude : result.coords.latitude,
        longitude : result.coords.longitude
      };
      this.map = L.map("map").setView([result.coords.latitude, result.coords.longitude], 19);

      console.log(this.map)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      L.marker([result.coords.latitude,result.coords.longitude],{icon : this.myPositionIcon}).addTo(this.map).bindPopup('<p>Ma position</p>');

    });

    setTimeout(()=>{
      this.mosqueeService.getMosquee().subscribe((result)=>{
        this.mosquees = result;
        console.log(this.mosquees)
        this.mosquees.forEach((mosquee : any) => {
          L.marker([mosquee.latitude,mosquee.longitude],{icon : this.mosqueePositionIcon}).addTo(this.map).bindPopup(`<p>${mosquee.nom}</p>`);
        });
      });
    },10000)
    
    // try{
    //   this.watchId = Geolocation.watchPosition({}, (position, err) =>{
    //     console.log("watch", position?.coords);
    //     this.zone.run(()=>{
    //       this.watchCoordinate = {
    //         latitude : position?.coords.latitude,
    //         longitude : position?.coords.longitude,
    //       };
    //       // this.routing.options.waypoints[0].lat = this.watchCoordinate.latitude;
    //       // this.routing.options.waypoints[0].lng = this.watchCoordinate.longitude;
    //       console.log(this.watchCoordinate.latitude);
    //       console.log(this.watchCoordinate.longitude);
    //     });
    //   })
    // }catch(e){
    //   console.log(e);
    // }

  }

  goToMyPosition(){
    this.map.panTo(new L.LatLng(this.watchCoordinate.latitude, this.watchCoordinate.longitude));
  }

  ngOnDestroy(): void {
    if(this.watchId != null)
      Geolocation.clearWatch({id : this.watchId})
  }

  calcDist(lat : number, lng : number){
    const rayonDeLaTerre = 6371.07103;
    const radiusLatUser = lat * (Math.PI/180);
    const radiusLatMosq = 12.632895 * (Math.PI/180);
    const latitudeDiff = radiusLatMosq - radiusLatUser;
    const longitudeDiff = (-8.028002-lng)*(Math.PI/180);
    const distance = 2 * rayonDeLaTerre * Math.sin(Math.sqrt(Math.sin(latitudeDiff/2) * Math.sin(latitudeDiff/2) + Math.cos(radiusLatUser) * Math.cos(radiusLatMosq) * Math.sin(longitudeDiff/2) * Math.sin(longitudeDiff/2)))
    console.log(distance)
  }

}
