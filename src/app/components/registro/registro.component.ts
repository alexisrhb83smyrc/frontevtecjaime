import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
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
      foto: this.imagenBase64,
      edad: this.calcularEdad(this.fechaNacimiento)
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

  calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - fechaNac.getFullYear();

    if (
      hoy < new Date(hoy.getFullYear(), fechaNac.getMonth(), fechaNac.getDate())
    ) {
      return edad - 1;
    }

    return edad;
  }

  imagenBase64: string | undefined;

  cargarImagen(event: any) {
    const archivo = event.target.files[0];

    if (archivo) {
      const lector = new FileReader();
      lector.onload = (e: any) => {
        this.imagenBase64 = e.target.result;
      };

      lector.readAsDataURL(archivo);
    }
  }
}
