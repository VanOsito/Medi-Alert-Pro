import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class FarmaciaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
