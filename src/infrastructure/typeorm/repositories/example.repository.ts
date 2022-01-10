import { InjectRepository } from '@nestjs/typeorm';
import { IExampleTypeOrmRepository } from 'src/domain/interfaces/repositories/example-typeorm-repository.interface';
import { Repository } from 'typeorm';
import { ExampleTypeOrm } from '../entities/example.entity';
import { BaseTypeOrmRepository } from './base.repository';

export class ExampleTypeOrmRepository
  extends BaseTypeOrmRepository<ExampleTypeOrm>
  implements IExampleTypeOrmRepository
{
  constructor(
    @InjectRepository(ExampleTypeOrm)
    private readonly exampleRepository: Repository<ExampleTypeOrm>,
  ) {
    super(exampleRepository);
  }
}
