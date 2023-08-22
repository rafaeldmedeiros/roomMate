import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoradoresPageRoutingModule } from './moradores-routing.module';

import { MoradoresPage } from './moradores.page';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoradoresPageRoutingModule,
    MenuModule
  ],
  declarations: [MoradoresPage]
})
export class MoradoresPageModule { }
