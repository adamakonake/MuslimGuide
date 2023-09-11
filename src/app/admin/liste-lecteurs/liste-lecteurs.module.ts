import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeLecteursPageRoutingModule } from './liste-lecteurs-routing.module';

import { ListeLecteursPage } from './liste-lecteurs.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListeLecteursPageRoutingModule,
        NgOptimizedImage
    ],
  declarations: [ListeLecteursPage]
})
export class ListeLecteursPageModule {}
