import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {

  @IsString()
  name: string;
  
  @IsString()
  @IsOptional() // Poner Opcional
  description?: string;

  @IsNumber()
  @Type(() => Number) // Intente transformar a un numero
  price: number;

}
