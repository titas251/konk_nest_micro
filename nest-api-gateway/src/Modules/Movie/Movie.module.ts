import { Module, forwardRef } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthorModule } from '../Author/Author.module';
import { MoviesController } from './Movie.controller';
import { MoviesService } from './Movie.service';

const { MOVIE_HOST, MOVIE_PORT } = process.env;

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MOVIE_SERVICE',
        transport: Transport.TCP,
        options: {
          host: MOVIE_HOST || 'movie',
          port: parseInt(MOVIE_PORT) || 3001,
        },
      },
    ]),
    forwardRef(() => AuthorModule),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService],
})
export class MovieModule {}
