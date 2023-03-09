/* eslint-disable prettier/prettier */
// Para cria as validações precisamos criar uma classe e dizer quais campos que estamos recebendo na nossa Api e nessa classe vamos usar as blibliotecas de validações
// instalar bliblioteca --> npm install class-validator class-transformer

import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

// Aqui vamos criar as validações do usuario usando os decoratos do class validator
export class CriaUsuarioDTO {
    @IsNotEmpty() // não pode estar vazio 
    nome: string;

    @IsEmail() // e um email
    email: string;

    @MinLength(6) // senha no minimo 6 digitos ou catacteres
    senha: string;

    // vá para o arquivo usuario.controller.ts no metodo criarUsuario e diz as informações do usuario e do tipo: CriaUsuarioDTO

    // vá para o arquivo main.ts precisamos dizer para o nestjs que agente quer usar o GlobalPipes e habilita-lo
}