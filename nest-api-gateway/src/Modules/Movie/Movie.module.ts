import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
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
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MovieModule {}
