import {
  Controller,
  UseInterceptors,
  CacheInterceptor,
  CacheTTL,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateMovieDto } from './dto/CreateMovie.dto';
import { UpdateMovieDto } from './dto/UpdateMovie.dto';
import { MoviesService } from './Movie.service';

@Controller()
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @MessagePattern({ cmd: 'create' })
  create(@Payload() payload: CreateMovieDto) {
    return this.moviesService.create(payload);
  }

  @MessagePattern({ cmd: 'update' })
  update(@Payload() payload: UpdateMovieDto) {
    return this.moviesService.update(payload);
  }

  @MessagePattern({ cmd: 'findAll' })
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(20)
  findAll() {
    return this.moviesService.findAll();
  }

  @MessagePattern({ cmd: 'findOne' })
  async find(@Payload() id) {
    return await this.moviesService.findOne(id);
  }

  @MessagePattern({ cmd: 'remove' })
  delete(@Payload() id) {
    return this.moviesService.remove(id);
  }
}
