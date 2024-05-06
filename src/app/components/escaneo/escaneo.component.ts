import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.component.html',
  styleUrls: ['./escaneo.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class EscaneoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
