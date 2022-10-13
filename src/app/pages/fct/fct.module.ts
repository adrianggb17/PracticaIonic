import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FCTPageRoutingModule } from './fct-routing.module';

import { FCTPage } from './fct.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FCTPageRoutingModule,
    ComponentesModule
  ],
  declarations: [FCTPage]
})
export class FCTPageModule {}
