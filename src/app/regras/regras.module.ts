import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegrasPageRoutingModule } from './regras-routing.module';

import { RegrasPage } from './regras.page';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegrasPageRoutingModule,
    ReactiveFormsModule,
    MenuModule
  ],
  declarations: [RegrasPage]
})
export class RegrasPageModule { }
