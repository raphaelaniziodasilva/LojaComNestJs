/* eslint-disable prettier/prettier */
// aqui aonde vai ficar a entidade do usuario ou seja o model de usuario

export class UsuarioEntity {
    id: string;
    nome: string;
    email: string;
    senha: string

    // va para o usuario.repository.ts e tipe a variavel usuarios a lista de usuarios vai ser do tipo UsuarioEntity

    // agora va para o arquivo usuario.controller.ts no metodo criarUsuario e crie um novo usuario
}