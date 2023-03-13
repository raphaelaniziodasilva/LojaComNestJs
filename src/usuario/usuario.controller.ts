/* eslint-disable prettier/prettier */
// o controller de usuario vai ficar responsavel por lidar com a parte de rotas, receber dados e devolver respostas para os clientes da API

import { Controller, Post, Body, Get, Put, Param, Delete, HttpStatus, NotFoundException } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.Entity';
import { UsuarioRepository } from './usuario.repository';
import {v4 as uuid} from 'uuid'
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizarUsuarioDTO } from './dto/AtualizarUsuario.dto';

// decorator de @Controller() do nestjs. Todo controller no nestjs e decorado com um decorator de controller. O @Controller() vai nos dar uma rota que vai ser a raiz da aplicação 

// dentro do decorator @Controller(rota) vamos criar a nossa rota para recebermos as requisições http
@Controller('/usuarios') // importando e usando o @Controller para usuarios

export class UsuarioController {
    // criamos o controler agora precisamos colocar UsuarioController na arvore de modules do usuario do nestjs, criar o arquivo usuario.module.ts coloque o UsuarioController dentro de controllers

    // injeção de dependencia e a capacidade do framework de criar certos objetos 
    // vamos usar a injeção de dependencia. Precisamos criar um constructor e nesse construtor pedimos para o nestjs injete os objetos que queremos como parametro do construtor 
    constructor(private usuarioRepository: UsuarioRepository) {}
    // agora vamos para o arquivo usuario.module.ts e adicionar o prividers

    @Post() // importando e usando o decorator de @Post() para criar usuario
    // vamos importar e usar o decorator @Body() para enviar os dadosDoUsuario a requisção: postman
    async criarUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        // os dadosDoUsuario e do tipo CriaUsuarioDTO que contém as validações, crie um arquivo CriaUsuario.dto.ts na pasta dto

        // instanciando um usuario: criando um usuario e atribuindo seus dados
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        // para gerar um id vamos instalar a bliblioteca uuid e 
        // npm install uuid 
        // npm install -D @types/uuid --> instalando os types
        // precisamos importar a bliblioteca do uuid la em cima nos imports        
        usuarioEntity.id = uuid();

        // salvando os dados do usuario no UsuarioRepository.ts
        this.usuarioRepository.salvar(usuarioEntity);
        return {
            id: usuarioEntity.id,
            nome: usuarioEntity.nome,
            message: "Usuario criado com sucesso"
        }; // resposta em Json que usuario vai ver

        // ainda não estamos salvando os dados do usuario em nehum lugar precisariamos de um banco de dados pórem vamos utilizar outra forma para salvar os dados do usuario
        // vamos criar um arquivo usuario.repository.ts que vai salvar dados, guardar os usuarios criados
    }

    @Get()
    async listarUsuarios() {
        // no repositiorio usuario.repository.ts vamos criar o metodo de listar usuarios. Usando o metodo listar do repositorio
        const usuariosSalvo = await this.usuarioRepository.listar();

        // vamos mostrar somente o nome e o id do usuario quando for listado, crie um arquivo ListaUsuario.dto.ts na pasta dto 
        // vamos transformar as nossas entidades nos dtos de visualização que criamos    
        const usuariosLista = usuariosSalvo.map(
            // para cada usuario que passar pelo map
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );
        return usuariosLista; // resposta em Json
    }

    @Get('/:nomeDoUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDoUsuario') nomeDoUsuario: string) {
        // vá para o arquivo usuario.repository.ts e crie o metodo criar buscaPorNomeDeUsuario
        const usuarioEncontrado = this.usuarioRepository.buscaPorNomeDeUsuario(nomeDoUsuario)
        return usuarioEncontrado
    }

    @Put('/:id')
    async atualizarUsuarios(@Param('id') id: string, @Body() novosDados: AtualizarUsuarioDTO) {
        // os novosDados e do tipo AtualizarUsuarioDTO que contém as atualizações opcionais e validações, crie um arquivo AtualizarUsuario.dto.ts na pasta dto

        // no repositiorio usuario.repository.ts vamos criar o metodo de atualiza usuarios. Usando o metodo atualizar do repositorio 
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return {
            usuario: usuarioAtualizado,
            message: "usuário atualizado com sucesso",
        } // resposta em Json
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        // no repositiorio usuario.repository.ts vamos criar o metodo de remove usuarios. Usando o metodo remove do repositorio 
        const usuarioRemovido = await this.usuarioRepository.remove(id);

        return {
            usuario:usuarioRemovido,
            message: "usuário removido com sucesso"
        } // resposta em Json
    }
}
