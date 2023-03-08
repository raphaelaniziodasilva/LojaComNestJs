import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  // importando o UsuarioModule dentro da chave de imports
  imports: [UsuarioModule],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
