import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMosquesPageRoutingModule } from './list-mosques-routing.module';

import { ListMosquesPage } from './list-mosques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMosquesPageRoutingModule
  ],
  declarations: [ListMosquesPage]
})
export class ListMosquesPageModule {}
