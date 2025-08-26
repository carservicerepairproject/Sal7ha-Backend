import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ShopSignUpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  phoneNumber: number;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsNumber()
  @IsNotEmpty()
  commercialRegistraionNumber: number;

  @IsNumber()
  @IsNotEmpty()
  taxIdentificationNumber: number;
}
