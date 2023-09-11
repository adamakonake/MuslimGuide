export class Lecteur{
    nom!: string;
    prenom!: string;
    nationalite!: string;
    photo!: File;

    constructor(nom: string, prenom: string, nationalite: string, photo: File){
        this.nom = nom;
        this.prenom = prenom;
        this.nationalite = nationalite;
        this.photo = photo;
    }
}