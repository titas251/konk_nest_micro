import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './Modules/Author/Author.module';
import { MovieModule } from './Modules/Movie/Movie.module';

@Module({
  imports: [MovieModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
