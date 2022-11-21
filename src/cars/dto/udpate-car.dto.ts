import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id: string;

  @IsString({ message: 'The brand must be a string' })
  @IsOptional()
  readonly brand: string;

  @IsString()
  @IsOptional()
  @MinLength(3, { message: 'You need a type a longer model sir' })
  readonly model: string;
}
