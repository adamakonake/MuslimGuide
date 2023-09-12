export class Annonce{
    date !: Date;
    nomMosquee !: string;
    heurePreche !: string;
    heureTabsir !: string;
    constructor( date : Date, nomMosquee : string, heurePreche : string, heureTabsir : string ){
         this.date = date;
         this.nomMosquee = nomMosquee;
          this.heurePreche = heurePreche;
           this.heureTabsir = heureTabsir
    }

}