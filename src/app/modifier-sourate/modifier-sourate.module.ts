import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierSouratePageRoutingModule } from './modifier-sourate-routing.module';

import { ModifierSouratePage } from './modifier-sourate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierSouratePageRoutingModule
  ],
  declarations: [ModifierSouratePage]
})
export class ModifierSouratePageModule {}
