"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProdutoModule = void 0;
var common_1 = require("@nestjs/common");
var usuario_module_1 = require("../../../../../../../../../../src/usuario/usuario.module");
var produto_controller_1 = require("./produto.controller");
var produto_repository_1 = require("./produto.repository");
var ProdutoModule = /** @class */ (function () {
    function ProdutoModule() {
    }
    ProdutoModule = __decorate([
        (0, common_1.Module)({
            imports: [usuario_module_1.UsuarioModule],
            controllers: [produto_controller_1.ProdutoController],
            providers: [produto_repository_1.ProdutoRepository]
        })
    ], ProdutoModule);
    return ProdutoModule;
}());
exports.ProdutoModule = ProdutoModule;
