import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';

@Injectable()
export class MoviesService {
  constructor(
    @Inject('MOVIE_SERVICE') private readonly movieServiceClient: ClientProxy,
  ) {}

  findAll() {
    const pattern = { cmd: 'findAll' };
    return this.movieServiceClient.send(pattern, {});
  }

  findOne(id: string) {
    const pattern = { cmd: 'findOne' };
    const payload = id;
    return this.movieServiceClient.send(pattern, payload);
  }

  create(movie: any) {
    const pattern = { cmd: 'create' };
    const payload = movie;
    return this.movieServiceClient.send(pattern, payload);
  }

  update(id: string, movie: any) {
    const pattern = { cmd: 'update' };
    const payload = { id, ...movie };
    return this.movieServiceClient.send(pattern, payload);
  }

  remove(id: string) {
    const pattern = { cmd: 'remove' };
    const payload = id;
    return this.movieServiceClient.send(pattern, payload);
  }

  removeAuthorFromMovie(authorId: string) {
    const pattern = { cmd: 'removeAuthorFromMovie' };
    const payload = authorId;

    return this.movieServiceClient.send(pattern, payload);
  }
}
