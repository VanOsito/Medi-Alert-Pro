import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AlertController } from '@ionic/angular';
import { DataBaseService } from 'src/app/services/data-base.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [DataBaseService]
})
export class CorreoPage implements OnInit {

  correo = '';
  constructor(private router: Router, private bd: DataBaseService ) { }

  ngOnInit() {
  }

  // async recuperarContrasena() {
  //   try {
  //     const usu = await this.bd.leerUsuario(this.correo);
      
  //     if (!usu) {
  //       // Si no se encuentra ningún usuario, navegar a la página de 'incorrecto'
  //       this.router.navigate(['/incorrecto']);
  //     } else {
  //       // Si se encuentra el usuario, navegar a la página de 'pregunta' con los datos del usuario
  //       const navigationExtras: NavigationExtras = {
  //         state: {
  //           usuario: usu
  //         }
  //       };
  //       this.router.navigate(['/pregunta'], navigationExtras);
  //     }
  //   } catch (error) {
  //     console.error('Error al recuperar la contraseña:', error);
  //   }
  // }

  async recuperarContrasena() {
    const usu=await this.bd.leerUsuario(this.correo);
    if (usu == undefined){
    this.router.navigate(['/incorrecto']);
  }else{
    this.router.navigate(['/pregunta']);
    if (!usu) {
      this.router.navigate(['/incorrecto']);
    } else {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: usu
        }
      };
      this.router.navigate(['/pregunta'], navigationExtras);
    }
  }
  
  }

  volverAlInicio() {
    this.router.navigate(['/login'], );
  }

}
