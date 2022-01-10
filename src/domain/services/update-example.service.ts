import { Inject, NotFoundException } from '@nestjs/common';
import { UpdateExampleDto } from 'src/application/example/dto/update-example.dto';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { IUpdateExampleService } from '../interfaces/services/update-example-service.interface';

export class UpdateExampleService implements IUpdateExampleService {
  constructor(
    @Inject('IExampleMongooseRepository')
    private readonly exampleRepository: IExampleMongooseRepository,
  ) {}

  async execute(id: string, updateExampleDto: UpdateExampleDto): Promise<void> {
    const updatedExample = await this.exampleRepository.update(
      id,
      updateExampleDto,
    );

    if (!updatedExample) throw new NotFoundException();
  }
}
