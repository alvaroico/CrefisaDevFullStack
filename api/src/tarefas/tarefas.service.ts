import { Injectable } from '@nestjs/common';

@Injectable()
export class TarefasService {
  getHello(): string {
    return 'Hello World!';
  }
}
