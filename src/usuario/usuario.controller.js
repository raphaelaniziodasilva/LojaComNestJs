"use strict";
/* eslint-disable prettier/prettier */
// o controller de usuario vai ficar responsavel por lidar com a parte de rotas, receber dados e devolver respostas para os clientes da API
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UsuarioController = void 0;
var common_1 = require("@nestjs/common");
// decorator de @Controller() do nestjs. Todo controller no nestjs e decorado com um decorator de controller. O @Controller() vai nos dar uma rota que vai ser a raiz da aplicação 
// dentro do decorator @Controller(rota) vamos criar a nossa rota para recebermos as requisições http
var UsuarioController = /** @class */ (function () {
    // criamos o controler agora precisamos colocar UsuarioController na arvore de modules do usuario do nestjs, criar o arquivo usuario.module.ts coloque o UsuarioController dentro de controllers
    // injeção de dependencia e a capacidade do framework de criar certos objetos 
    // vamos usar a injeção de dependencia. Precisamos criar um constructor e nesse construtor pedimos para o nestjs injete os objetos que queremos como parametro do construtor 
    function UsuarioController(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    // agora vamos para o arquivo usuario.module.ts e adicionar o prividers
    UsuarioController.prototype.criarUsuario = function (dadosDoUsuario) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // os dadosDoUsuario e do tipo CriaUsuarioDTO
                // salvando os dados do usuario no UsuarioRepository.ts
                this.usuarioRepository.salvar(dadosDoUsuario);
                return [2 /*return*/, dadosDoUsuario]; // resposta em Json
            });
        });
    };
    UsuarioController.prototype.listarUsuarios = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // no repositiorio usuario.repository.ts vamos criar o metodo de listar usuarios
                // usando o metodo listar do repositorio
                return [2 /*return*/, this.usuarioRepository.listar()];
            });
        });
    };
    __decorate([
        (0, common_1.Post)() // importando e usando o decorator de @Post() para criar usuario
        // vamos importar e usar o decorator @Body() para enviar os dadosDoUsuario a requisção: postman
        ,
        __param(0, (0, common_1.Body)())
    ], UsuarioController.prototype, "criarUsuario");
    __decorate([
        (0, common_1.Get)()
    ], UsuarioController.prototype, "listarUsuarios");
    UsuarioController = __decorate([
        (0, common_1.Controller)('/usuarios') // importando e usando o @Controller para usuarios
    ], UsuarioController);
    return UsuarioController;
}());
exports.UsuarioController = UsuarioController;
