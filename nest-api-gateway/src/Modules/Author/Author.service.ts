import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { MoviesService } from '../Movie/Movie.service';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_SERVICE') private readonly authorServiceClient: ClientProxy,
    @Inject(forwardRef(() => MoviesService))
    private moviesService: MoviesService,
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

  async remove(id: string) {
    const pattern = { cmd: 'remove' };
    const payload = id;

    //call movie service to remove relation
    try {
      await lastValueFrom(this.moviesService.removeAuthorFromMovie(id));
    } catch {
      throw new HttpException(
        'Cannot remove author from movie',
        HttpStatus.CONFLICT,
      );
    }

    return this.authorServiceClient.send(pattern, payload);
  }
}
