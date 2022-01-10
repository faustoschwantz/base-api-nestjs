import { Inject, NotFoundException } from '@nestjs/common';
import { ExampleDto } from 'src/application/example/dto/example.dto';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { IFindExampleService } from '../interfaces/services/find-example-service.interface';

export class FindExampleService implements IFindExampleService {
  constructor(
    @Inject('IExampleMongooseRepository')
    private readonly exampleRepository: IExampleMongooseRepository,
  ) {}

  async execute(id: string): Promise<ExampleDto> {
    const foundExample = await this.exampleRepository.findById(id);

    if (!foundExample) throw new NotFoundException();

    return {
      id: foundExample.id,
      description: foundExample.description,
      enable: foundExample.enable,
    };
  }
}
