import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'examples' })
export class ExampleTypeOrm {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  description: string;

  @Column()
  enable: boolean;
}
