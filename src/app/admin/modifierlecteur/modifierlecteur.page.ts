import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Lecteur} from "../ajout-lecteur/mode";
import {FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-modifierlecteur',
  templateUrl: './modifierlecteur.page.html',
  styleUrls: ['./modifierlecteur.page.scss'],
})
export class ModifierlecteurPage implements OnInit,OnDestroy {
  public lecteur!: Lecteur;
  updateLecteurForm!:FormGroup;
  formIsEdited:boolean=false;
  sub1!:Subscription;
  sub2!:Subscription;
  @ViewChild('updateForm') updateForm!:FormGroup;
  ngOnInit() {
  }

  constructor() {
  }

    ngOnDestroy(): void {

    }

}

