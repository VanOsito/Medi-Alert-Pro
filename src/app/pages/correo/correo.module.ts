import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataBaseService } from 'src/app/services/data-base.service';
import { IonicModule } from '@ionic/angular';

import { CorreoPageRoutingModule } from './correo-routing.module';

import { CorreoPage } from './correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreoPageRoutingModule
  ],
  providers: [DataBaseService] 
  
})
export class CorreoPageModule {}
