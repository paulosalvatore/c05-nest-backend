import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { UpdateImageDto } from 'src/image/dto/update-image.dto';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ValidateNested({ each: true })
  @Type(() => UpdateImageDto)
  @IsArray()
  @IsOptional()
  images?: UpdateImageDto[];
}
