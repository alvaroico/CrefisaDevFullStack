import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarefas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  description: string;
}
