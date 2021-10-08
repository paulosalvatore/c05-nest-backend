import { IsString } from 'class-validator';
import { Cpf } from 'src/decorators/cpf.decorator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  name: string;

  @Cpf()
  cpf: string;
}
