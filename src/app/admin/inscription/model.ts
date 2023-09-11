export class Inscription{
    nom!: string;
    prenom!: string;
    email!: string;
    telephone!: string;
    password!: string;
    confirmPassword!: string;

    constructor(nom:string,prenom:string,email:string,telephone:string,password:string,confirmPassword: string){
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

}