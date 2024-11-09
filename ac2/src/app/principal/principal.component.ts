import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',

  // imports: [DecimalPipe],
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  listar() {
    this.usuarioService.getUsuario().then(
      (usuarios) => {
        this.usuarios = usuarios;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
