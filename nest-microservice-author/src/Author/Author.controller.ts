import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthorService } from './Author.service';
import { CreateAuthorDto } from './dto/CreateAuthor.dto';
import { UpdateAuthorDto } from './dto/UpdateAuthor.dto';

@Controller()
export class AuthorsController {
  constructor(private authorService: AuthorService) {}

  @MessagePattern({ cmd: 'create' })
  create(@Payload() payload: CreateAuthorDto) {
    return this.authorService.create(payload);
  }

  @MessagePattern({ cmd: 'findAll' })
  findAll() {
    return this.authorService.findAll();
  }

  @MessagePattern({ cmd: 'findOne' })
  findOne(@Payload() id) {
    return this.authorService.findOne(id);
  }

  @MessagePattern({ cmd: 'remove' })
  delete(@Payload() id) {
    return this.authorService.remove(id);
  }

  @MessagePattern({ cmd: 'update' })
  update(@Payload() payload: UpdateAuthorDto) {
    return this.authorService.update(payload);
  }
}
