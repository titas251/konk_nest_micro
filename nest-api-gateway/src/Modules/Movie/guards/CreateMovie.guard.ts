import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { AuthorService } from '../../Author/Author.service';

@Injectable()
export class CreateMovieGuard implements CanActivate {
  constructor(private readonly authorService: AuthorService) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest();
    const { authorId } = request.body;
    if (authorId !== undefined) {
      const existingAuthor = await lastValueFrom(
        this.authorService.findOne(authorId),
      );

      if (!existingAuthor) {
        throw new HttpException('Author not found', HttpStatus.NOT_FOUND);
      }
    }

    return true;
  }
}
