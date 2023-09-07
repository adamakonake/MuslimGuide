import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecteurCorantPageRoutingModule } from './lecteur-corant-routing.module';

import { LecteurCorantPage } from './lecteur-corant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecteurCorantPageRoutingModule
  ],
  declarations: [LecteurCorantPage]
})
export class LecteurCorantPageModule {}
