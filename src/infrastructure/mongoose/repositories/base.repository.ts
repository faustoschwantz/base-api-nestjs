import { Document, HydratedDocument, Model, UpdateQuery } from 'mongoose';
import { IBaseMongooseRepository } from 'src/domain/interfaces/repositories/base-mongoose-repository.interface';

export abstract class BaseMongooseRepository<TDocument extends Document>
  implements IBaseMongooseRepository<TDocument>
{
  constructor(private readonly model: Model<TDocument>) {}

  async create(data: object): Promise<TDocument> {
    const createdData = new this.model(data);
    return createdData.save();
  }

  async update(
    id: string,
    data: UpdateQuery<object>,
  ): Promise<HydratedDocument<TDocument>> {
    return this.model.findByIdAndUpdate(id, data);
  }
}
