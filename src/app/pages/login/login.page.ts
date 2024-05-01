import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class LoginPage implements OnInit {

  isAlertOpen: boolean = false; 
  alertButtons: any[] = []; 


  public usuario: Usuario = new Usuario('', '', '', '', ''); // Inicializa un usuario

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit(): void {}

  contrasena(): void {
    this.router.navigate(['correo']);
  }

  login(): void {
    if (!this.validarUsuario(this.usuario)) {
      return;
    }

    this.mostrarMensaje('¡Bienvenido!');

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['inicio'], navigationExtras);
  }

  recuperar(): void {
    this.router.navigate(['/correo']);
  }

  validarUsuario(usuario: Usuario): boolean {
    const usu = this.usuario.buscarUsuarioValido(
      usuario.mdl_correo, usuario.mdl_contrasena
    );

    if (usu) {
      this.usuario = usu; // Actualiza la instancia de usuario
      return true;
    } else {
      this.mostrarMensaje('Las credenciales no son correctas!');
      return false;
    }
  }

  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion ? duracion : 2000
      });
    toast.present();
  }
}


  
