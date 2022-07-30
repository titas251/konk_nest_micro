import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AuthorService } from './Author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() body: any) {
    return this.authorService.create(body);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.authorService.findOne(params.id);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.authorService.remove(params.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.authorService.update(id, body);
  }
}
