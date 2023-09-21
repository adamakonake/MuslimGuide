export class Lecteur{
    id?:string
    nom: string;
    prenom: string;
    nationalite: string;
    photo: File;

    constructor(nom: string, prenom: string, nationalite: string, photo: File){
        this.nom = nom;
        this.prenom = prenom;
        this.nationalite = nationalite;
        this.photo = photo;
    }
}
