import { IsString } from 'class-validator';
import { Image } from '../entities/image.entity';

export class CreateImageDto extends Image {
  @IsString()
  url: string;
}
