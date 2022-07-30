import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from './TypeORM/ConnectionOptions';
import { AuthorModule } from './Author/Author.module';

@Module({
  imports: [TypeOrmModule.forRoot(ConnectionOptions), AuthorModule],
})
export class AppModule {}
