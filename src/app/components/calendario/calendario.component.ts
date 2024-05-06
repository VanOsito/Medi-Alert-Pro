import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class CalendarioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
