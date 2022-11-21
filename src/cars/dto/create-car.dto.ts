import { IsString, MinLength, minLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'The brand must be a string' })
  readonly brand: string;

  @IsString()
  @MinLength(3, { message: 'You need a type a longer model sir' })
  readonly model: string;
}
