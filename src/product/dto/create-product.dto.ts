import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateImageDto } from 'src/image/dto/create-image.dto';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends Product {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsOptional()
  price?: number | null;

  @ValidateNested({ each: true })
  @Type(() => CreateImageDto)
  @IsArray()
  @IsOptional()
  images?: CreateImageDto[];
}

/*
TODO:
Backend:
OK - Substituir images do tipo do Prisma com uma entidade para a imagem
- Adicionar validação da entidade de imagem (URL precisa ser válida)
- Transformar a lista de entidades de imagem em uma declaração que o Prisma conseguirá persistir
as informações relacionadas

Frontend:
- Enviar uma lista de objetos com a estrutura da entidade imagem
*/
