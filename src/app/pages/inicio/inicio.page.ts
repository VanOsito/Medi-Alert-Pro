import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EscaneoComponent } from 'src/app/components/escaneo/escaneo.component';
import { FarmaciaComponent } from 'src/app/components/farmacia/farmacia.component';
import { CalendarioComponent } from 'src/app/components/calendario/calendario.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    EscaneoComponent,
    FarmaciaComponent,
    CalendarioComponent
  ]
})
export class InicioPage implements OnInit {

  componente_activa = 'escaneo';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cambiarComponente(event: any) {
    this.componente_activa = event.detail.value;
  }

  cerrarsesion(){
    this.router.navigate(['/login']);
  }


}
