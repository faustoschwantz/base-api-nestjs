import { Document } from 'mongoose';

export interface IBaseMongooseRepository<TDocument extends Document> {
  create(data: object): Promise<TDocument>;
}
