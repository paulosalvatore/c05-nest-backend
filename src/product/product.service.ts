import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.ProductInclude = {
    images: {
      select: {
        id: true,
        url: true,
      },
    },
    categories: true,
  };

  create(dto: CreateProductDto) {
    const categoriesIds = dto.categoriesIds;

    delete dto.categoriesIds;

    const data: Prisma.ProductCreateInput = {
      ...dto,
      images: {
        create: dto.images,
      },
      categories: {
        connect: categoriesIds.map((categoryId) => ({ id: categoryId })),
      },
    };

    return this.prisma.product.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.product.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, dto: UpdateProductDto) {
    const categoriesIds = dto.categoriesIds;

    delete dto.categoriesIds;

    const data: Prisma.ProductUpdateInput = {
      ...dto,
      images: {
        upsert: dto.images.map((updateImageDto) => ({
          where: { id: updateImageDto.id },
          update: { url: updateImageDto.url },
          create: { url: updateImageDto.url },
        })),
      },
      categories: {
        connect: categoriesIds?.map((categoryId) => ({ id: categoryId })) || [],
      },
    };

    return this.prisma.product.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    this.prisma.product.delete({
      where: { id },
    });
  }
}
