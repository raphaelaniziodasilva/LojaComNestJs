"use strict";
/* eslint-disable prettier/prettier */
// Para cria as validações precisamos criar uma classe e dizer quais campos que estamos recebendo na nossa Api e nessa classe vamos usar as blibliotecas de validações
// instalar bliblioteca --> npm install class-validator class-transformer
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CriaUsuarioDTO = void 0;
var class_validator_1 = require("class-validator");
// Aqui vamos criar as validações do usuario usando os decoratos do class validator
var CriaUsuarioDTO = /** @class */ (function () {
    function CriaUsuarioDTO() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)() // não pode estar vazio 
    ], CriaUsuarioDTO.prototype, "nome");
    __decorate([
        (0, class_validator_1.IsEmail)() // e um email
    ], CriaUsuarioDTO.prototype, "email");
    __decorate([
        (0, class_validator_1.MinLength)(6) // senha no minimo 6 digitos ou catacteres
    ], CriaUsuarioDTO.prototype, "senha");
    return CriaUsuarioDTO;
}());
exports.CriaUsuarioDTO = CriaUsuarioDTO;
