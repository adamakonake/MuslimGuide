import { Time } from "@angular/common";

export class Mosquee {
    nom!:string;
    adresse!:string;
    imam!:string;
    longitude!:number;
    latitude!:number;
    fadjr!:Time;
    zohr!:Time;
    asri!:Time; 
    magreb!:Time;
    isha!:Time
  constructor  (
        nom:string,
        adresse:string,
        imam:string,
        longitude:number,
        latitude:number,
        )
        {
            this.nom=nom;
            this.adresse=adresse;
            this.imam=imam;
            this.longitude=longitude;
            this.latitude=latitude
        }
}
