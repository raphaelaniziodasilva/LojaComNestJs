// arquivo que inicializa o projeto
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // vamos dizer para o nestjs deixar usar o GlobalPipes para fazer as validações
  app.useGlobalPipes(
    new ValidationPipe({
      // transforme o json no CriaUsuarioDTO
      transform: true,
      // quando o nestjs for usar a orientação desse pipe ele vai ingnorar todas as propriedades que vierem no json que não estiverem no nosso dto
      whitelist: true,
      // para lançar um erro se alguem mandar um dado no json que não esta no nosso dto
      forbidNonWhitelisted: true,
    }),
  );

  // pro class validator resolver as dependencias que so o nest sabe resolver agente precisa passar aqui o mesmo container de resolução de dependencia que o nest usa
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(3000);
}
bootstrap();
