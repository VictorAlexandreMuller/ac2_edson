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

  email : string = ''
  senha : string = ''

  constructor(
    private usuarioServico : UsuarioService,
    private router : Router
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    this.usuarioServico.getUsuario().then(
      (usuarios : any[]) => {
        usuarios.forEach(usuario => {
          if (usuario.email === this.email && usuario.senha === this.senha) {
            this.router.navigate(['/principal'])
          } else {
            alert("Usuário ou senha incorretos")
          }
        });
        
      },
      (error) => {
        console.log(error);
        
      }
      )    
  }

}
