import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ExampleDto } from 'src/application/example/dto/example.dto';
import { ExampleDocument } from 'src/infrastructure/mongoose/schemas/example.schema';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { IFindExampleService } from '../interfaces/services/find-example-service.interface';
import { FindExampleService } from './find-example.service';

const exampleFake: ExampleDto = {
  id: 'any-id',
  description: 'any-description',
  enable: false,
};

describe('FindExampleService', () => {
  let service: IFindExampleService;
  let repository: IExampleMongooseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'IFindExampleService',
          useClass: FindExampleService,
        },
        {
          provide: 'IExampleMongooseRepository',
          useFactory: (): Partial<IExampleMongooseRepository> => ({
            findById: jest.fn(async () => exampleFake as ExampleDocument),
          }),
        },
      ],
    }).compile();

    service = module.get<IFindExampleService>('IFindExampleService');
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
      const repositoryFindSpy = jest
        .spyOn(repository, 'findById')
        .mockReturnValueOnce(null);

      const responsePromise = service.execute(exampleFake.id);

      await expect(responsePromise).rejects.toThrow(NotFoundException);
      expect(repositoryFindSpy).toHaveBeenCalledWith(exampleFake.id);
    });

    it('Should be find and return a Example', async () => {
      const repositoryFindSpy = jest.spyOn(repository, 'findById');

      const response = await service.execute(exampleFake.id);

      expect(repositoryFindSpy).toHaveBeenCalledWith(exampleFake.id);
      expect(response).toEqual(exampleFake);
    });
  });
});
