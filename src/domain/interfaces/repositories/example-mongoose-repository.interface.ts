import { ExampleDocument } from 'src/infrastructure/mongoose/schemas/example.schema';
import { IBaseMongooseRepository } from './base-mongoose-repository.interface';

export type IExampleMongooseRepository =
  IBaseMongooseRepository<ExampleDocument>;
