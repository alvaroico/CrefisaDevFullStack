import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { IPutTarefa } from '../interface/put.tarefa.interface';
import { IPostTarefa } from '../interface/post.tarefa.interface';
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
  async criarTarefas(@Body() body: IPostTarefa): Promise<Tarefas> {
    return await this.appService.create(body.description);
  }
  @Put()
  async updateTarefas(@Body() body: IPutTarefa): Promise<Tarefas> {
    return await this.appService.update(body);
  }
}
