import { Time } from "@angular/common";

export class Even{
    type ! : string; 
    lieu ! : string;
    date ! : Date;
    heure ! : string;
    description ! : string;

    constructor( type : string, lieu : string, date : Date, heure : string, description: string){
        this.type = type;
        this.lieu = lieu;
        this.date = date;
        this.heure = heure;
        this.description = description;
    }
}