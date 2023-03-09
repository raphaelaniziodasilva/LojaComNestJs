/* eslint-disable prettier/prettier */
// não e interessante mostrar todas as informações para o usuario assim que ele for cadastrado, vamos mostrar somente o nome e o id do usuario quando for listado

export class ListaUsuarioDTO {
    constructor(
        readonly id: string,
        readonly nome: string
    ) {}
    // agora vamos para o arquivo usuario.controller.ts no metodo listaUsuarios() 
}