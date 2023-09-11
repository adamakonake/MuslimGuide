

export class Mosquee {
    nom!:string;
    adresse!:string;
    imam!:string;
    longitude!:number;
    latitude!:number;
    fadjr!:string;
    zohr!:string;
    asri!:string; 
    magreb!:string;
    isha!:string;
    djouma!:string
  constructor  (
        nom:string,
        adresse:string,
        imam:string,
        longitude:number,
        latitude:number,
        fadjr:string,
        zohr:string,
        asri:string,
        magreb:string,
        isha:string,
        djouma:string,)
        {
            this.nom=nom;
            this.adresse=adresse;
            this.imam=imam;
            this.longitude=longitude;
            this.latitude=latitude;
            this.fadjr=fadjr;
            this.zohr=zohr;
            this.asri=asri;
            this.magreb=magreb;
            this.isha=isha;
            this.djouma=djouma
            
        }
}
