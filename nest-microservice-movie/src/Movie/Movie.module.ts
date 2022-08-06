import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './Movie.controller';
import { MoviesService } from './Movie.service';
import { Movie } from './Movie.entity';
import { AuthorIds } from './AuthorIds.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, AuthorIds])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MovieModule {}
