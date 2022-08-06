import { Module, forwardRef } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MovieModule } from '../Movie/Movie.module';
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
    forwardRef(() => MovieModule),
  ],
  controllers: [AuthorController],
  providers: [AuthorService],
  exports: [AuthorService],
})
export class AuthorModule {}
