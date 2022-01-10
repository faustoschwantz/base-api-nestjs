import { Document, HydratedDocument } from 'mongoose';

export interface IBaseMongooseRepository<TDocument extends Document> {
  create(data: object): Promise<TDocument>;

  update(id: string, data: object): Promise<HydratedDocument<TDocument>>;
}
