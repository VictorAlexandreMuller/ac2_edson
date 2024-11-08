import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuarios : any[] = []
  autenticado : boolean = false;

  email : string = ''
  senha : any = ''

  constructor(
    private usuarioServico : UsuarioService,
    private router : Router
  ) {}

  onSubmit() {
    this.usuarioServico.getLogin(this.email, this.senha).then(
      (usuario : any) => {
      if (usuario) {
        this.router.navigate(['/principal'])
      } else {
        alert("Usuário ou senha incorretos.")
      }
    },
    (error) => {
        console.log(error);
        
      }
      )    
  }

}
