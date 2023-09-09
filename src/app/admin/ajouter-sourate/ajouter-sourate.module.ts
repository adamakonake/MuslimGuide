import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSouratePageRoutingModule } from './ajouter-sourate-routing.module';

import { AjouterSouratePage } from './ajouter-sourate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSouratePageRoutingModule
  ],
  declarations: [AjouterSouratePage]
})
export class AjouterSouratePageModule {}
