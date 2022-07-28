import { Controller, Get } from '@nestjs/common';
import { TarefasService } from './tarefas.service';

@Controller('/tarefas')
export class TarefasController {
  constructor(private readonly appService: TarefasService) {}

  @Get()
  async getHello(): Promise<any> {
    return await this.appService.findAll();
  }
}
