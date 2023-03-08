/* eslint-disable prettier/prettier */
// o module pode ter os seus controles, repositorios e varios outros arquiovos
// arquivo de module de usuario vai agrupar todas as coisas relacionadas ao usuario

import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";

// vamos criar o module de usuario, importando e usando o decorator @Module
@Module({
    // passando a referencia do UsuarioController dentro da chave controllers 
    controllers: [UsuarioController],
    // dentro de providers vamos colocar referencias para classes que queremos para que o nestjs gerencie a criação desses objetos  
    providers: [UsuarioRepository]
    // agora vamos para o arquivo usuario.repository.ts e transformar em provider para o nestjs
})
// exportando a classe de module
export class UsuarioModule{}

// agora vamos importar o UsuarioModule dentro do imports do arquivo app.module.ts

