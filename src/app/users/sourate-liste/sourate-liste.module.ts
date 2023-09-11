import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SourateListePageRoutingModule } from './sourate-liste-routing.module';

import { SourateListePage } from './sourate-liste.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SourateListePageRoutingModule,
    HttpClientModule
  ],
  declarations: [SourateListePage]
})
export class SourateListePageModule {}
