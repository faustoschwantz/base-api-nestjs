import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ExampleDto } from 'src/application/example/dto/example.dto';
import { ExampleDocument } from 'src/infrastructure/mongoose/schemas/example.schema';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { IDeleteExampleService } from '../interfaces/services/delete-example-service.interface';
import { DeleteExampleService } from './delete-example.service';

const exampleFake: ExampleDto = {
  id: 'any-id',
  description: 'any-description',
  enable: false,
};

describe('DeleteExampleService', () => {
  let service: IDeleteExampleService;
  let repository: IExampleMongooseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'IDeleteExampleService',
          useClass: DeleteExampleService,
        },
        {
          provide: 'IExampleMongooseRepository',
          useFactory: (): Partial<IExampleMongooseRepository> => ({
            deleteById: jest.fn(async () => exampleFake as ExampleDocument),
          }),
        },
      ],
    }).compile();

    service = module.get<IDeleteExampleService>('IDeleteExampleService');
    repository = module.get<IExampleMongooseRepository>(
      'IExampleMongooseRepository',
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('When to execute the method', () => {
    it('Should be return a NotFoundException if the example does not exist', async () => {
      const repositoryDeleteSpy = jest
        .spyOn(repository, 'deleteById')
        .mockReturnValueOnce(null);

      const responsePromise = service.execute(exampleFake.id);

      await expect(responsePromise).rejects.toThrow(NotFoundException);
      expect(repositoryDeleteSpy).toHaveBeenCalledWith(exampleFake.id);
    });

    it('Should be delete a Example', async () => {
      const repositoryDeleteSpy = jest.spyOn(repository, 'deleteById');

      const response = await service.execute(exampleFake.id);

      expect(repositoryDeleteSpy).toHaveBeenCalledWith(exampleFake.id);
      expect(response).toBeUndefined();
    });
  });
});
