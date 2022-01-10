import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateExampleDto } from 'src/application/example/dto/update-example.dto';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { IExampleTypeOrmRepository } from '../interfaces/repositories/example-typeorm-repository.interface';
import { IUpdateExampleService } from '../interfaces/services/update-example-service.interface';

@Injectable()
export class UpdateExampleService implements IUpdateExampleService {
  constructor(
    @Inject('IExampleMongooseRepository')
    private readonly exampleMongooseRepository: IExampleMongooseRepository,
    @Inject('IExampleTypeOrmRepository')
    private readonly exampleTypeOrmRepository: IExampleTypeOrmRepository,
  ) {}

  async execute(id: string, updateExampleDto: UpdateExampleDto): Promise<void> {
    const updatedExample = await this.exampleMongooseRepository.update(
      id,
      updateExampleDto,
    );

    if (!updatedExample) throw new NotFoundException();
  }
}
