import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const { AUTHOR_HOST, AUTHOR_PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: AUTHOR_HOST || 'author',
      port: AUTHOR_PORT || '3002',
    },
  });
  app.listen();
}
bootstrap();
