import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquetesPageRoutingModule } from './enquetes-routing.module';

import { EnquetesPage } from './enquetes.page';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquetesPageRoutingModule,
    MenuModule
  ],
  declarations: [EnquetesPage]
})
export class EnquetesPageModule { }
