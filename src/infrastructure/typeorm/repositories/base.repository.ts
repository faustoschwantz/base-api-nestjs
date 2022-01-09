import { IBaseTypeOrmRepository } from 'src/domain/interfaces/repositories/base-typeorm-repository.interface';
import {
  DeleteResult,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  ObjectID,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseTypeOrmRepository<TEntity>
  implements IBaseTypeOrmRepository<TEntity>
{
  constructor(private readonly entity: Repository<TEntity>) {}

  public async create(data: TEntity): Promise<TEntity> {
    return this.entity.save(data);
  }

  public async update(
    criteria: string | number | Date | ObjectID | FindConditions<TEntity>,
    partialEntity: QueryDeepPartialEntity<TEntity>,
  ): Promise<UpdateResult> {
    return this.entity.update(criteria, partialEntity);
  }

  public async find(options?: FindManyOptions<TEntity>): Promise<TEntity[]> {
    return this.entity.find(options);
  }

  public async findById(
    id?: string | number | Date | ObjectID,
  ): Promise<TEntity | undefined> {
    return this.entity.findOne(id);
  }

  public async findOne(
    options?: FindOneOptions<TEntity>,
  ): Promise<TEntity | undefined> {
    return this.entity.findOne(options);
  }

  public async deleteById(
    id: string | number | Date | ObjectID,
  ): Promise<DeleteResult> {
    return this.entity.delete(id);
  }

  public async delete(
    ids: string[] | number[] | Date[] | ObjectID[],
  ): Promise<DeleteResult> {
    return this.entity.delete(ids);
  }
}
