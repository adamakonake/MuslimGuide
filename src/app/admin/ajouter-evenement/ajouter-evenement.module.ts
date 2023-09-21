import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { AjouterEvenementPageRoutingModule } from './ajouter-evenement-routing.module';

import { AjouterEvenementPage } from './ajouter-evenement.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AjouterEvenementPageRoutingModule
  ],
  declarations: [AjouterEvenementPage]
})
export class AjouterEvenementPageModule {}
