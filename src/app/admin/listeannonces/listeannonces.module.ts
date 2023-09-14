import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';

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
  declarations: [ListeannoncesPage, ConfirmationDialogComponent]
})
export class ListeannoncesPageModule {}
