import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Sejam bem-vindos ao módulo 4 de FS!';
  }
}
