/* eslint-disable prettier/prettier */
// o controller de usuario vai ficar responsavel por lidar com a parte de rotas, receber dados e devolver respostas para os clientes da API

import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

// decorator de @Controller() do nestjs. Todo controller no nestjs e decorado com um decorator de controller. O @Controller() vai nos dar uma rota que vai ser a raiz da aplicação 

// dentro do decorator @Controller(rota) vamos criar a nossa rota para recebermos as requisições http
@Controller('/usuarios') // importando e usando o @Controller para usuarios
export class UsuarioController {
    // criamos o controler agora precisamos colocar UsuarioController na arvore de modules do usuario do nestjs, criar o arquivo usuario.module.ts coloque o UsuarioController dentro de controllers

    // criando o repositiorio de usuario: instanciando, com o repositorio criado use metodo salvar em criarUsuario
    private usuarioRepository = new UsuarioRepository();

    @Post() // importando e usando o decorator de @Post() para criar usuario
    // vamos importar e usar o decorator @Body() para enviar os dadosDoUsuario a requisção: postman
    async criarUsuario(@Body() dadosDoUsuario) {
        // salvando os dados do usuario no UsuarioRepository.ts
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario; // resposta em Json

        // ainda não estamos salvando os dados do usuario em nehum lugar precisariamos de um banco de dados pórem vamos utilizar outra forma para salvar os dados do usuario
        // vamos criar um arquivo usuario.repository.ts que vai salvar dados, guardar os usuarios criados
    }

    @Get()
    async listarUsuarios() {
        // no repositiorio usuario.repository.ts vamos criar o metodo de listar usuarios
        // usando o metodo listar do repositorio
        return this.usuarioRepository.listar();

    }



}
