import { Inject, Injectable } from '@nestjs/common';
import { CreateExampleDto } from 'src/application/example/dto/create-example.dto';
import { ExampleDto } from 'src/application/example/dto/example.dto';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { IExampleTypeOrmRepository } from '../interfaces/repositories/example-typeorm-repository.interface';
import { ICreateExampleService } from '../interfaces/services/create-example-service.interface';

@Injectable()
export class CreateExampleService implements ICreateExampleService {
  constructor(
    @Inject('IExampleMongooseRepository')
    private readonly exampleMongooseRepository: IExampleMongooseRepository,
    @Inject('IExampleTypeOrmRepository')
    private readonly exampleTypeOrmRepository: IExampleTypeOrmRepository,
  ) {}

  async execute(createExampleDto: CreateExampleDto): Promise<ExampleDto> {
    const { id, description, enable } =
      await this.exampleMongooseRepository.create(createExampleDto);

    return { id, description, enable };
  }
}
