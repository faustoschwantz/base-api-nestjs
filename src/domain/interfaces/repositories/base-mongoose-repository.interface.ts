import { Document, FilterQuery } from 'mongoose';

export interface IBaseMongooseRepository<TDocument extends Document> {
  create(data: object): Promise<TDocument>;

  update(id: string, data: object): Promise<TDocument>;

  findById(id: string): Promise<TDocument | null>;

  find(filter?: FilterQuery<TDocument>): Promise<TDocument[]>;
}
