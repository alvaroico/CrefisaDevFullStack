import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarefas {
  constructor(description: string) {
    this.description = description;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  description: string;
}
