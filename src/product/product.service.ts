import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor (private readonly prisma: PrismaService) {}

  private readonly _include = {
    images: {
      select: {
        id: false,
        url: true
      }
    },
  };

  create(data: CreateProductDto) {
    //return 'This action adds a new product';
    return this.prisma.product.create({
      data,
      include:this._include,
    });
  }

  findAll() {
    // return `This action returns all product`;
    return this.prisma.product.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    // return `This action returns a #${id} product`;
    return this.prisma.product.findUnique(
      {
        where: {id},
        include: this._include,
      });
  }

  update(id: number, data: UpdateProductDto) {
    // return `This action updates a #${id} product`;
    return this.prisma.product.update({
      where: {id},
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    // return `This action removes a #${id} product`;
    return this.prisma.product.delete({
      where: {id},
    });
  }
}
