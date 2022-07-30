import { IsString, IsOptional, IsInt } from 'class-validator';

export class UpdateAuthorDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsInt()
  @IsOptional()
  age: number;
}
