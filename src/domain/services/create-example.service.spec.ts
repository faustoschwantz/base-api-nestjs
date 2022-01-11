import { Test, TestingModule } from '@nestjs/testing';
import { CreateExampleDto } from 'src/application/example/dto/create-example.dto';
import { ExampleDto } from 'src/application/example/dto/example.dto';
import { ExampleDocument } from 'src/infrastructure/mongoose/schemas/example.schema';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { ICreateExampleService } from '../interfaces/services/create-example-service.interface';
import { CreateExampleService } from './create-example.service';

const exampleFake: ExampleDto = {
  id: 'any-id',
  description: 'any-description',
  enable: false,
};

const createExampleFake: CreateExampleDto = {
  description: 'any-description',
  enable: false,
};

describe('CreateExampleService', () => {
  let service: ICreateExampleService;
  let repository: IExampleMongooseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'ICreateExampleService',
          useClass: CreateExampleService,
        },
        {
          provide: 'IExampleMongooseRepository',
          useFactory: (): Partial<IExampleMongooseRepository> => ({
            create: jest.fn(async () => exampleFake as ExampleDocument),
          }),
        },
      ],
    }).compile();

    service = module.get<ICreateExampleService>('ICreateExampleService');
    repository = module.get<IExampleMongooseRepository>(
      'IExampleMongooseRepository',
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('When to execute the method', () => {
    it('Should be create and return a Example', async () => {
      const repositoryCreateSpy = jest.spyOn(repository, 'create');
      const response = await service.execute(createExampleFake);

      expect(repositoryCreateSpy).toHaveBeenCalledWith(createExampleFake);
      expect(response).toEqual(exampleFake);
    });
  });
});
