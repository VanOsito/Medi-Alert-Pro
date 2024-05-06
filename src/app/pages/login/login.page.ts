import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { showToast } from 'src/app/tools/message-routines';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl:'./login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class LoginPage implements OnInit {
  correo = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    showToast('click boton ingresar')
    this.authService.login(this.correo, this.password);
  }

  contrasena(){
    this.router.navigate(['/correo']);
  }

  registro(){
    this.router.navigate(['/registrarme']);
  }

}