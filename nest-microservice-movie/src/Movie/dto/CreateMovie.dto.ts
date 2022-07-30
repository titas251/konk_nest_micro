import { Country } from '../../types';
import {
  Min,
  Max,
  IsEnum,
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsInt,
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  director: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(Country)
  @IsNotEmpty()
  country: Country;

  @IsInt()
  @IsNotEmpty()
  @Min(30)
  @Max(300)
  duration: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  rating: number;

  @IsString()
  @IsOptional()
  authorId?: string;
}
