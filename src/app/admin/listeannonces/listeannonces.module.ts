import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeannoncesPageRoutingModule } from './listeannonces-routing.module';

import { ListeannoncesPage } from './listeannonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeannoncesPageRoutingModule
  ],
  declarations: [ListeannoncesPage]
})
export class ListeannoncesPageModule {}
