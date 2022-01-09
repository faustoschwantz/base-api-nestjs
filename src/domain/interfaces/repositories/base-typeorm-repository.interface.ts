import {
  DeleteResult,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  ObjectID,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IBaseTypeOrmRepository<TEntity> {
  create(data: TEntity): Promise<TEntity>;

  update(
    criteria: string | number | Date | ObjectID | FindConditions<TEntity>,
    partialEntity: QueryDeepPartialEntity<TEntity>,
  ): Promise<UpdateResult>;

  find(options?: FindManyOptions<TEntity>);

  findById(
    id?: string | number | Date | ObjectID,
  ): Promise<TEntity | undefined>;

  findOne(options?: FindOneOptions<TEntity>): Promise<TEntity | undefined>;

  deleteById(id: string | number | Date | ObjectID): Promise<DeleteResult>;

  delete(ids: string[] | number[] | Date[] | ObjectID[]): Promise<DeleteResult>;
}
