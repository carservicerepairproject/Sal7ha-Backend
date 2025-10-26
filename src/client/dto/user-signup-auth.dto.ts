import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserSignUpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  streetAddress: string;
}
