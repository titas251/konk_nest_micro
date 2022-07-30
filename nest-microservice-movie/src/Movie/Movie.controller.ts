import { Controller, Body, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateMovieDto } from './dto/CreateMovie.dto';
import { UpdateMovieDto } from './dto/UpdateMovie.dto';
import { MoviesService } from './Movie.service';

@Controller()
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @MessagePattern({ cmd: 'create' })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @MessagePattern({ cmd: 'update' })
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @MessagePattern({ cmd: 'findAll' })
  findAll() {
    return this.moviesService.findAll();
  }

  @MessagePattern({ cmd: 'findOne' })
  find(@Param() params) {
    return this.moviesService.findOne(params.id);
  }

  @MessagePattern({ cmd: 'delete' })
  delete(@Param() params) {
    return this.moviesService.remove(params.id);
  }
}
