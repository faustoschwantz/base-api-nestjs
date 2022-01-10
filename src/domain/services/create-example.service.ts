import { Inject } from '@nestjs/common';
import { CreateExampleDto } from 'src/application/example/dto/create-example.dto';
import { ExampleDto } from 'src/application/example/dto/example.dto';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { ICreateExampleService } from '../interfaces/services/create-example-service.interface';

export class CreateExampleService implements ICreateExampleService {
  constructor(
    @Inject('IExampleMongooseRepository')
    private readonly exampleRepository: IExampleMongooseRepository,
  ) {}

  async execute(createExampleDto: CreateExampleDto): Promise<ExampleDto> {
    const { id, description, enable } = await this.exampleRepository.create(
      createExampleDto,
    );

    return { id, description, enable };
  }
}
