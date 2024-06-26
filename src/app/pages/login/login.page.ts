import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataBaseService } from 'src/app/services/data-base.service';
// import { AuthService } from 'src/app/services/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-login',
  templateUrl:'./login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [DataBaseService] 
})

export class LoginPage implements OnInit {
  correo = '';
  password = '';


  constructor( private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    this.router.navigate(['/inicio']);
  
  }

  contrasena(){
    this.router.navigate(['/correo']);
  }

  

}