import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, getConnection, Repository } from 'typeorm';
import { Movie } from './Movie.entity';
import { CreateMovieDto } from './dto/CreateMovie.dto';
import { UpdateMovieDto } from './dto/UpdateMovie.dto';
import { AuthorIds } from './AuthorIds.entity';
import { Connection } from 'mysql2';

@Injectable()
export class MoviesService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Movie) private moviesRepository: Repository<Movie>,
  ) {}

  findAll() {
    return this.moviesRepository.find();
  }

  findOne(id: string) {
    return this.moviesRepository.findOneBy({ id });
  }

  async create(movie: CreateMovieDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const newMovie = await queryRunner.manager.save(Movie, movie);

      const relatedAuthor = new AuthorIds();
      relatedAuthor.authorId = movie.authorId;
      relatedAuthor.movie = newMovie;
      await queryRunner.manager.save(AuthorIds, relatedAuthor);
      await queryRunner.commitTransaction();

      return newMovie;
    } catch {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  update(movie: UpdateMovieDto) {
    return this.moviesRepository.save(movie);
  }

  async remove(id: string) {
    return this.moviesRepository.delete(id);
  }
}
