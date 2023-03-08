/* eslint-disable prettier/prettier */
// No momento não vamos nos preocupar com banco de dados BD
// vamos salvar os dados, usuarios que forem cadastrado em uma lista de usaurios 

import { Injectable } from "@nestjs/common";

// Um provider no nestjs e basicamente qualquer classe que esteja decorada com o decorator @Injectable() 
// vamos transformar a classe UsuarioRepository em um provider para o nestjs
@Injectable()
export class UsuarioRepository {
  private usuarios = []; // lista
  
  // guardando usuarios na lista
  async salvar(usuario) {
    // salvando usuario
    this.usuarios.push(usuario);
    // visualizando os usuario no cadastrado no terminal
    // console.log(this.usuarios)

    // no controler de usuario precisamos criar o repositiorio de usuario
  }

  // listando usuarios
  async listar() {
    return this.usuarios;
    // no controler use o metodo listar
  }
}
