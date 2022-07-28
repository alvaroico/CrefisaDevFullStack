import { Body, Controller, Get, Post } from '@nestjs/common';
import { Tarefas } from './tarefas.entity';
import { TarefasService } from './tarefas.service';

@Controller('/tarefas')
export class TarefasController {
  constructor(private readonly appService: TarefasService) {}

  @Get()
  async getAll(): Promise<Tarefas[]> {
    return await this.appService.findAll();
  }
  @Post()
  async insTarefas(@Body() body: IPostTarefa): Promise<Tarefas> {
    return await this.appService.create(body.description);
  }
}
