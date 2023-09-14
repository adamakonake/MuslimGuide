import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Lecteur } from './mode';
import { LecteurService } from 'src/app/services/lecteur.service';


@Component({
  selector: 'app-ajout-lecteur',
  templateUrl: './ajout-lecteur.page.html',
  styleUrls: ['./ajout-lecteur.page.scss'],
})
export class AjoutLecteurPage implements OnInit {
  
  ajoutLecteur: FormGroup;
  selectedImage: File | undefined;
  


  ngOnInit() {
  }

  constructor(private fb: FormBuilder, private lecteurService: LecteurService,) {
    this.ajoutLecteur = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      nationalite: ['', Validators.required],
      photo: [null],
    });
   }

   

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file;

      // Vous pouvez également prévisualiser l'image si nécessaire
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // e.target.result contient l'URL de l'image prévisualisée
        const imageUrl = e.target.result;
        console.log('URL de l\'image prévisualisée :', imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }

    submit() {
      console.log("je suis clik")
    
      // if (this.ajoutLecteur.valid) {
        const newLecteur = new Lecteur(
          this.ajoutLecteur.value.nom!,
          this.ajoutLecteur.value.prenom!,
          this.ajoutLecteur.value.nationalite!,
          this.ajoutLecteur.value.photo!,
        )

        console.log(this.ajoutLecteur.value + "je trouve quelque chose")
    console.log(this.lecteurService.addLecteur(newLecteur));
 
    
   }


}
