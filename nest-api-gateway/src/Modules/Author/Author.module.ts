import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthorController } from './Author.controller';
import { AuthorService } from './Author.service';

const { AUTHOR_HOST, AUTHOR_PORT } = process.env;

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTHOR_SERVICE',
        transport: Transport.TCP,
        options: {
          host: AUTHOR_HOST || 'author',
          port: parseInt(AUTHOR_PORT) || 3001,
        },
      },
    ]),
  ],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
