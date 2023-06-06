import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquetesPageRoutingModule } from './enquetes-routing.module';

import { EnquetesPage } from './enquetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquetesPageRoutingModule
  ],
  declarations: [EnquetesPage]
})
export class EnquetesPageModule {}
