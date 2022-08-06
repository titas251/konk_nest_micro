import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Country } from '../types';
import { AuthorIds } from './AuthorIds.entity';

@Entity('movie')
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  director: string;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column({ type: 'enum', enum: Country, default: Country.US })
  country: Country;

  @Column()
  rating: number;

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

  @OneToMany(() => AuthorIds, (author) => author.movie)
  authorIds: AuthorIds[];
}
