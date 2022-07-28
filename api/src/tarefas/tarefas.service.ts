import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tarefas } from './tarefas.entity';

@Injectable()
export class TarefasService {
  constructor(
    @Inject('TAREFAS_REPOSITORY')
    private tarefasRepository: Repository<Tarefas>,
  ) {}
  async findAll(): Promise<Tarefas[]> {
    return this.tarefasRepository.find();
  }
  async create(tarefaString: string): Promise<Tarefas> {
    return this.tarefasRepository.save(new Tarefas(tarefaString));
  }
}
