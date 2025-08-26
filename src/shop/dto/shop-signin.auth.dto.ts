import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ShopSignInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
