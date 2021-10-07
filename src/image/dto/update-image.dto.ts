import { IsInt } from 'class-validator';
import { CreateImageDto } from './create-image.dto';

export class UpdateImageDto extends CreateImageDto {
  @IsInt()
  id: number;
}
