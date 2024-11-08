import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuarios : any[] = []

  constructor(
    private usuarioServico : UsuarioService
  ) {}

  ngOnInit() {
    const usuarios = this.usuarioServico.getUsuario();

    console.log(usuarios);
    
  }

}
