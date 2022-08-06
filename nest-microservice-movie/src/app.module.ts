import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from './TypeORM/ConnectionOptions';
import { MovieModule } from './Movie/Movie.module';
import * as redisStore from 'cache-manager-redis-store';
import { redisOptions } from './Redis/RedisConnectionOpt';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(ConnectionOptions),
    CacheModule.register({
      store: redisStore,
      isGlobal: true,
      ...redisOptions,
    }),
    MovieModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
