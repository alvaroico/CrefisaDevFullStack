import { Test, TestingModule } from '@nestjs/testing';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';

describe('AppController', () => {
  let tarefasController: TarefasController;

  beforeEach(async () => {
    const tarefas: TestingModule = await Test.createTestingModule({
      controllers: [TarefasController],
      providers: [TarefasService],
    }).compile();

    tarefasController = tarefas.get<TarefasController>(TarefasController);
  });

  describe('Teste Rota Tarefas', () => {
    it('Lista todas as tarefas', () => {
      expect(tarefasController.getAll()).toBe([]);
    });
  });
});
