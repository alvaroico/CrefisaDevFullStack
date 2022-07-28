import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tarefas } from './tarefas.entity';

@Injectable()
export class TarefasService {
  constructor(
    @Inject('TAREFAS_REPOSITORY')
    private photoRepository: Repository<Tarefas>,
  ) {}
  async findAll(): Promise<Tarefas[]> {
    return this.photoRepository.find();
  }
}
