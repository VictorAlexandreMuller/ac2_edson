import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url : string = "https://6729633e6d5fa4901b6cfc1d.mockapi.io/usuario";

  constructor() { }

  getUsuario() {
    return fetch(this.url)
    .then(response => response.json())
  }

  getLogin(email: string, senha: string) {
    const usuarios = fetch(this.url)
    .then(response => response.json())

    
    return "Usuário não encontrado."
  }
}
