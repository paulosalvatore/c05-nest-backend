import { Prisma } from '@prisma/client';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends Product {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsOptional()
  price?: number | null;

  @IsOptional()
  images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;
}

/*
TODO:
Backend:
- Substituir images do tipo do Prisma com uma entidade para a imagem
- Adicionar validação da entidade de imagem (URL precisa ser válida)
- Transformar a lista de entidades de imagem em uma declaração que o Prisma conseguirá persistir
as informações relacionadas

Frontend:
- Enviar uma lista de objetos com a estrutura da entidade imagem
*/
