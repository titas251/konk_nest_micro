import { Controller, Body, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthorService } from './Author.service';
import { CreateAuthorDto } from './dto/CreateAuthor.dto';
import { UpdateAuthorDto } from './dto/UpdateAuthor.dto';

@Controller()
export class AuthorsController {
  constructor(private authorService: AuthorService) {}

  @MessagePattern({ cmd: 'create' })
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @MessagePattern({ cmd: 'findAll' })
  findAll() {
    return this.authorService.findAll();
  }

  @MessagePattern({ cmd: 'findOne' })
  findOne(@Param() params) {
    return this.authorService.findOne(params.id);
  }

  @MessagePattern({ cmd: 'delete' })
  delete(@Param() params) {
    return this.authorService.remove(params.id);
  }

  @MessagePattern({ cmd: 'update' })
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(id, updateAuthorDto);
  }
}
