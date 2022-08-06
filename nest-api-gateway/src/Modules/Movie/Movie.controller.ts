import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateMovieGuard } from './guards/CreateMovie.guard';
import { MoviesService } from './Movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Post()
  @UseGuards(CreateMovieGuard)
  create(@Body() body: any) {
    return this.moviesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.moviesService.update(id, body);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  find(@Param() params) {
    return this.moviesService.findOne(params.id);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.moviesService.remove(params.id);
  }
}
