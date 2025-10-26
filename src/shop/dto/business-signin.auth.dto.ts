import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class BusinessSignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
