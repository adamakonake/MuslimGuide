import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeDesMosqueesPageRoutingModule } from './liste-des-mosquees-routing.module';

import { ListeDesMosqueesPage } from './liste-des-mosquees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeDesMosqueesPageRoutingModule
  ],
  declarations: [ListeDesMosqueesPage]
})
export class ListeDesMosqueesPageModule {}
