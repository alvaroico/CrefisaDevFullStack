import { DataSource } from 'typeorm';
import { Tarefas } from '../../tarefas/tarefas.entity';

export const tarefasProviders = [
  {
    provide: 'TAREFAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tarefas),
    inject: ['DATA_SOURCE'],
  },
];
