import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './Author.entity';
import { CreateAuthorDto } from './dto/CreateAuthor.dto';
import { UpdateAuthorDto } from './dto/UpdateAuthor.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  findAll() {
    return this.authorRepository.find();
  }

  findOne(id: string) {
    return this.authorRepository.findOneBy({ id });
  }

  update(author: UpdateAuthorDto) {
    return this.authorRepository.save(author);
  }

  async create(author: CreateAuthorDto) {
    const newAuthor = this.authorRepository.create(author);
    await this.authorRepository.save(newAuthor);

    return newAuthor;
  }

  async remove(id: string) {
    return await this.authorRepository.delete(id);
  }
}
