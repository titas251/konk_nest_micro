import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './Movie.entity';
import { CreateMovieDto } from './dto/CreateMovie.dto';
import { UpdateMovieDto } from './dto/UpdateMovie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private moviesRepository: Repository<Movie>,
  ) {}

  findAll() {
    return this.moviesRepository.find();
  }

  findOne(id: string) {
    return this.moviesRepository.findOneBy({ id });
  }

  create(movie: CreateMovieDto) {
    const newMovie = this.moviesRepository.create(movie);
    return this.moviesRepository.save(newMovie);
  }

  update(movie: UpdateMovieDto) {
    return this.moviesRepository.save(movie);
  }

  async remove(id: string) {
    return this.moviesRepository.delete(id);
  }
}
