/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CriaProdutoDTO {
    @IsNotEmpty({message: "O nome não pode ser vazio"}) // Verifica se o valor fornecido não está vazio
    nome: string;

    @IsPositive() // Verifica se o valor é um número positivo maior que zero
    @IsNumber() // Verifica se o valor é um número.
    valor: number;

    @IsPositive()
    @IsNumber()
    quantidadeDisponivel: number;

    @IsNotEmpty({message: "A descrição não pode ser vazio"})
    descricao: string;
}