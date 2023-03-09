/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtualizarUsuarioDTO {
    @IsNotEmpty({message: "O nome não pode ser vazio"})  
    @IsOptional() // opcional
    nome: string;

    @IsEmail(undefined, {message: "O email informado é invalido"}) 
    @EmailEhUnico({message: "O email informado é invalido, já existe um usuario come este enail"})
    @IsOptional() // opcional
    email: string;

    @MinLength(6, {message: "A senha precisa ter pelo menos 6 caracteres"})
    @IsOptional() // opcional
    senha: string;

    // agora vamos usar esse dto no arquivo usuario.controller.ts no metodo atualizarUsuarios
}