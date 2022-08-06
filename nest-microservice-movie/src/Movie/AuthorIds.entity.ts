import {
  Entity,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { Movie } from './Movie.entity';

@Entity('author_ids')
export class AuthorIds extends BaseEntity {
  @PrimaryColumn({ name: 'movie_id' })
  movieId: string;

  @PrimaryColumn({ name: 'author_id' })
  authorId: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt?: Date;

  @ManyToOne(() => Movie, (movie) => movie.authorIds)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}
