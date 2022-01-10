import { Inject, NotFoundException } from '@nestjs/common';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { IDeleteExampleService } from '../interfaces/services/delete-example-service.interface';

export class DeleteExampleService implements IDeleteExampleService {
  constructor(
    @Inject('IExampleMongooseRepository')
    private readonly exampleRepository: IExampleMongooseRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const foundExample = await this.exampleRepository.deleteById(id);
    if (!foundExample) throw new NotFoundException();
  }
}
