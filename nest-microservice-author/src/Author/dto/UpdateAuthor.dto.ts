import { IsString, IsOptional, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateAuthorDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsInt()
  @IsOptional()
  age: number;
}
