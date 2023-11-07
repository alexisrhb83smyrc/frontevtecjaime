import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent {

  usuarios: any[] = [];

  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['usuarios']) {
        this.usuarios = JSON.parse(params['usuarios']);
      }
    });

    this.verUsuariosRegistrados()
  }
  id!: string;
  nombreCompleto!: string;
  direccion!: string;
  fechaNacimiento!: Date;
  foto!: string;

  

  verUsuariosRegistrados() {
    console.log('Usuarios Registrados:');
    console.log(this.usuarios);
  }

  public irNuevo() {
    this.router.navigate(['/registro']);
  }
}
