import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_SERVICE') private readonly authorServiceClient: ClientProxy,
  ) {}

  findAll() {
    const pattern = { cmd: 'findAll' };
    return this.authorServiceClient.send(pattern, {});
  }

  findOne(id: string) {
    const pattern = { cmd: 'findOne' };
    const payload = id;
    return this.authorServiceClient.send(pattern, payload);
  }

  create(movie: any) {
    const pattern = { cmd: 'create' };
    const payload = movie;
    return this.authorServiceClient.send(pattern, payload);
  }

  update(id: string, movie: any) {
    const pattern = { cmd: 'update' };
    const payload = { id, ...movie };
    return this.authorServiceClient.send(pattern, payload);
  }

  remove(id: string) {
    const pattern = { cmd: 'remove' };
    const payload = id;
    return this.authorServiceClient.send(pattern, payload);
  }
}
