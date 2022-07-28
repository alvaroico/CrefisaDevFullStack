import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas/tarefas.controller';
import { AppController } from './app.controller';
import { TarefasService } from './tarefas/tarefas.service';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, TarefasController],
  providers: [AppService, TarefasService],
})
export class AppModule {}
