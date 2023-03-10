/* eslint-disable @typescript-eslint/no-unused-vars *//* eslint-disable prettier/prettier */
// vamos fazer a validação do email. Dois usuarios não pode usar o mesmo email 
// precisamos criar um decorator customizado e ensinar pro class validator como fazer essa validação

import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";

// para o usuarioRepository ser injetado aqui dentro do EmailEhUnicoValidator precisamos transformar ele em um provider va para o arquivo usuario.repository.ts
@Injectable()
// para o nestjs encontrar esse objeto e poder criar e injetar as dependencias ele precisa estar dentro daquele array de providers do nosso modulo de usuario, va para o usuario.module.ts e adicione dentro do providers o objeto EmailEhUnicoValidator

// vamos informar pro class validator que essa validação ela é asyncrona
@ValidatorConstraint({async: true})

export class EmailEhUnicoValidator implements ValidatorConstraintInterface {
    // para pesquisar o usuario vamos precisar do nosso repository de usuario, para chamar o metodo e verificar se existe o usuario com determinado email
    constructor(private usuarioRepository: UsuarioRepository) {}
    // ainda não temos o metodo que busca o usuario por email va em usuario.repository.ts e crie

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        // usando o metodo existeComEmail
        const usuarioComEmailExiste = await this.usuarioRepository.existeComEmail(value)

        // se o retornarmos true quer dizer que a validação passou e não vai disparar nehuma menssagem de error, se retornamos falso quer dizer que aconteceu o erro de validação e o erro vai ser disparado. Vamos devolver falso
        return !usuarioComEmailExiste;
    }
    // precisamos dizer pro class validator que ele pode usar o mesmo recurso de resolução e dependencia que o nest tem va para o arquivo main.ts e use a função do class validator useContainer()
}

// agora vamos criar o nosso decorator. Um decorator no typescript e basicamente uma função que devolve uma função que executa alguma coisa em um objeto sendo no seu construtor ou em uma propriedade dele
// vamos exportar o nosso decorator como se fosse uma função que retorna uma função 
export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {

    // como o nosso decorator e de propriedade ele vai receber dois parametros
    return (objeto: object, propriedade: string) => {

        // vamos registrar o nosso decorator que vai agir sobre esse objeto e essa propriedade mais vai usar a nossa classe de validação que escrevemos
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailEhUnicoValidator
        });

        // Agora vamos usar o decorator lá no dto va para o arquivo CriaUsuario.dto.ts na propriedade de email use o decorator
    } 
}