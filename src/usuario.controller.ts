/* eslint-disable prettier/prettier */
// o controller de usuario vai ficar responsavel por lidar com a parte de rotas, receber dados e devolver respostas para os clientes da API

import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

// decorator de @Controller() do nestjs. Todo controller no nestjs e decorado com um decorator de controller. O @Controller() vai nos dar uma rota que vai ser a raiz da aplicação 

// dentro do decorator vamos criar a nossa rota para recebermos as requisições http
@Controller('/usuarios')
export class UsuarioController {
    // criamos o controler agora precisamos colocar UsuarioController na arvore de modules do nestjs, no arquivo app.module.ts coloque o UsuarioController dentro de controllers

    // ainda não estamos salvando os dados do usuario em nehum lugar precisariamos de um banco de dados pórem vamos utilizar outra forma para salvar os dados do usuario
    // vamos criar um arquivo usuario.repository.ts que vai salvar dados, guardar os usuarios criados
    // criando o repositiorio de usuario: instanciando, salvando os dados no metodo criarUsuario
    private usuarioRepository = new UsuarioRepository();

    @Post()
    // vamos usar o decorator @Body() para enviar os dadosDoUsuario a requisção: postman
    async criarUsuario(@Body() dadosDoUsuario) {
        // salvando os dados do usuario no UsuarioRepository
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario; // resposta em Json
    }
}
