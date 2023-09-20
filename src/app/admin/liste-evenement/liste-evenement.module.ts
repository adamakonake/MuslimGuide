import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeEvenementPageRoutingModule } from './liste-evenement-routing.module';

import { ListeEvenementPage } from './liste-evenement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListeEvenementPageRoutingModule
  ],
  declarations: [ListeEvenementPage]
})
export class ListeEvenementPageModule {}
