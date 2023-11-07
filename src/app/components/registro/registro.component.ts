import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  mostrarRegistro = true;
  mostrarListar = false;
  
  constructor(private router: Router) {}
  id!: string;
  nombreCompleto!: string;
  direccion!: string;
  fechaNacimiento!: Date;
  foto!: string;

  public usuarios: any[] = [];

  registrarUsuario() {
    const usuario = {
      id: this.id,
      nombreCompleto: this.nombreCompleto,
      direccion: this.direccion,
      fechaNacimiento: this.fechaNacimiento,
      foto: this.foto
    };

    this.usuarios.push(usuario);

    
    this.id = '';
    this.nombreCompleto = '';
    this.direccion = '';
    this.fechaNacimiento = null!;
    this.foto = '';

    this.verUsuariosRegistrados();
  }

  verUsuariosRegistrados() {
    console.log('Usuarios Registrados:');
    console.log(this.usuarios);
  }


  public irListar() {
    this.mostrarRegistro = false;
    this.mostrarListar = true;
  }

  public irRegistro() {
    this.mostrarRegistro = true;
    this.mostrarListar = false;
  }

  public calcularEdad() {
    
  }
}
