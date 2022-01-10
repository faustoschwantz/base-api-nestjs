import { Inject } from '@nestjs/common';
import { ExampleDto } from 'src/application/example/dto/example.dto';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { IFindAllExampleService } from '../interfaces/services/find-all-example-service.interface';

export class FindAllExampleService implements IFindAllExampleService {
  constructor(
    @Inject('IExampleMongooseRepository')
    private readonly exampleRepository: IExampleMongooseRepository,
  ) {}

  async execute(): Promise<ExampleDto[]> {
    const examples = await this.exampleRepository.find();

    return examples.map(({ id, description, enable }) => ({
      id,
      description,
      enable,
    }));
  }
}
