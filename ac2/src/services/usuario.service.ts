import { Injectable } from '@angular/core';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url : string = "https://6729633e6d5fa4901b6cfc1d.mockapi.io/usuario";

  constructor() { }

  async getUsuario() {
    return await fetch(this.url)
    .then(response => response.json())
  }

  async getLogin(email: string, senha: string) {
    const usuarios = await fetch(this.url)
    .then(response => response.json())


      for (const usuario of usuarios) {
        if (usuario.email === email && usuario.senha === senha) {
          return usuario;
        }
      }  
    
    return "Usuário não encontrado."
  }
}
