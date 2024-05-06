import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EscaneoComponent } from 'src/app/components/escaneo/escaneo.component';
import { FarmaciaComponent } from 'src/app/components/farmacia/farmacia.component';
import { CalendarioComponent } from 'src/app/components/calendario/calendario.component';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    EscaneoComponent,
    FarmaciaComponent,
    CalendarioComponent,
  ],
  
})
export class InicioPageModule {}
