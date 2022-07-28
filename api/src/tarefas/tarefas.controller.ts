import { Controller, Get } from '@nestjs/common';
import { TarefasService } from './tarefas.service';

@Controller('/tarefas')
export class TarefasController {
  constructor(private readonly appService: TarefasService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
