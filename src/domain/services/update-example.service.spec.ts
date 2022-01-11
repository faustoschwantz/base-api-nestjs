import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ExampleDto } from 'src/application/example/dto/example.dto';
import { UpdateExampleDto } from 'src/application/example/dto/update-example.dto';
import { ExampleDocument } from 'src/infrastructure/mongoose/schemas/example.schema';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { IUpdateExampleService } from '../interfaces/services/update-example-service.interface';
import { UpdateExampleService } from './update-example.service';

const exampleFake: ExampleDto = {
  id: 'any-id',
  description: 'any-description',
  enable: false,
};

const updateExampleFake: UpdateExampleDto = {
  description: 'any-description',
  enable: false,
};

describe('UpdateExampleService', () => {
  let service: IUpdateExampleService;
  let repository: IExampleMongooseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'IUpdateExampleService',
          useClass: UpdateExampleService,
        },
        {
          provide: 'IExampleMongooseRepository',
          useFactory: (): Partial<IExampleMongooseRepository> => ({
            update: jest.fn(async () => exampleFake as ExampleDocument),
          }),
        },
      ],
    }).compile();

    service = module.get<IUpdateExampleService>('IUpdateExampleService');
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
      const repositoryUpdateSpy = jest
        .spyOn(repository, 'update')
        .mockReturnValueOnce(null);

      const responsePromise = service.execute(
        exampleFake.id,
        updateExampleFake,
      );

      await expect(responsePromise).rejects.toThrow(NotFoundException);
      expect(repositoryUpdateSpy).toHaveBeenCalledWith(
        exampleFake.id,
        updateExampleFake,
      );
    });

    it('Should be update and return a Example', async () => {
      const repositoryUpdateSpy = jest.spyOn(repository, 'update');

      const response = await service.execute(exampleFake.id, updateExampleFake);

      expect(repositoryUpdateSpy).toHaveBeenCalledWith(
        exampleFake.id,
        updateExampleFake,
      );
      expect(response).toBeUndefined();
    });
  });
});
