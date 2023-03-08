import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';

@Module({
  imports: [],
  // colocando a referencia do controller na arvore de controllers
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
