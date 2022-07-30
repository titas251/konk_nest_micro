import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from './TypeORM/ConnectionOptions';
import { MovieModule } from './Movie/Movie.module';

@Module({
  imports: [TypeOrmModule.forRoot(ConnectionOptions), MovieModule],
})
export class AppModule {}
