import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicialPageRoutingModule } from './inicial-routing.module';

import { InicialPage } from './inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicialPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InicialPage]
})
export class InicialPageModule { }
