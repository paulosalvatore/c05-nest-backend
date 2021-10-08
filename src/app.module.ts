import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [ProductModule, CategoryModule, UserModule],
})
export class AppModule {}
