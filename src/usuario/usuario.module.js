"use strict";
/* eslint-disable prettier/prettier */
// o module pode ter os seus controles, repositorios e varios outros arquiovos
// arquivo de module de usuario vai agrupar todas as coisas relacionadas ao usuario
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsuarioModule = void 0;
var common_1 = require("@nestjs/common");
var usuario_controller_1 = require("./usuario.controller");
var usuario_repository_1 = require("./usuario.repository");
// vamos criar o module de usuario, importando e usando o decorator @Module
var UsuarioModule = /** @class */ (function () {
    // exportando a classe de module
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        (0, common_1.Module)({
            // passando a referencia do UsuarioController dentro da chave controllers 
            controllers: [usuario_controller_1.UsuarioController],
            // dentro de providers vamos colocar referencias para classes que queremos para que o nestjs gerencie a criação desses objetos  
            providers: [usuario_repository_1.UsuarioRepository]
            // agora vamos para o arquivo usuario.repository.ts e transformar em provider para o nestjs
        })
        // exportando a classe de module
    ], UsuarioModule);
    return UsuarioModule;
}());
exports.UsuarioModule = UsuarioModule;
// agora vamos importar o UsuarioModule dentro do imports do arquivo app.module.ts
