import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DAM1PageRoutingModule } from './dam1-routing.module';

import { DAM1Page } from './dam1.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DAM1PageRoutingModule,
    ComponentesModule
  ],
  declarations: [DAM1Page]
})
export class DAM1PageModule {}
