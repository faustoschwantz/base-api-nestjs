import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { BaseMongooseRepository } from './base.repository';
import { ExampleDocument, ExampleMongoose } from '../schemas/example.schema';
import { IExampleMongooseRepository } from 'src/domain/interfaces/repositories/example-mongoose-repository.interface';

export class ExampleMongooseRepository
  extends BaseMongooseRepository<ExampleDocument>
  implements IExampleMongooseRepository
{
  constructor(
    @InjectModel(ExampleMongoose.name)
    private exampleModel: Model<ExampleDocument>,
  ) {
    super(exampleModel);
  }
}
