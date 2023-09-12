

export class Mosquee {
    nom!:string;
    adresse!:string;
    imam!:string;
    longitude!:number;
    latitude!:number
   
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
            this.latitude=latitude;
            
            
        }
}
