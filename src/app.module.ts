import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  // importando o UsuarioModule e ProdutoModule dentro da chave de imports
  imports: [UsuarioModule, ProdutoModule],
})
export class AppModule {}
