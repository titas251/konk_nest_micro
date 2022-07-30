import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const { MOVIE_HOST, MOVIE_PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: MOVIE_HOST || 'movie',
      port: MOVIE_PORT || '3001',
    },
  });
  app.listen();
}
bootstrap();
