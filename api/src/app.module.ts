import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TarefasController } from './tarefas/tarefas.controller';
import { AppController } from './app.controller';
import { TarefasService } from './tarefas/tarefas.service';
import { AppService } from './app.service';
import { tarefasProviders } from './database/tabelas/tarefas.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, TarefasController],
  providers: [...tarefasProviders, AppService, TarefasService],
})
export class AppModule {}
