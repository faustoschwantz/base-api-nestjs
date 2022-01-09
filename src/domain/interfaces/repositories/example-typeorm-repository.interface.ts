import { ExampleTypeOrm } from 'src/infrastructure/typeorm/entities/example.entity';
import { IBaseTypeOrmRepository } from './base-typeorm-repository.interface';

export type IExampleTypeOrmRepository = IBaseTypeOrmRepository<ExampleTypeOrm>;
