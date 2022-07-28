import { Test, TestingModule } from '@nestjs/testing';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';

describe('AppController', () => {
  let appController: TarefasController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TarefasController],
      providers: [TarefasService],
    }).compile();

    appController = app.get<TarefasController>(TarefasController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
