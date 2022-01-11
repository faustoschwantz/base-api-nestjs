import { Test, TestingModule } from '@nestjs/testing';
import { ExampleDto } from 'src/application/example/dto/example.dto';
import { ExampleDocument } from 'src/infrastructure/mongoose/schemas/example.schema';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { IFindAllExampleService } from '../interfaces/services/find-all-example-service.interface';
import { FindAllExampleService } from './find-all-example.service';

const exampleFake: ExampleDto = {
  id: 'any-id',
  description: 'any-description',
  enable: false,
};

describe('FindAllExampleService', () => {
  let service: IFindAllExampleService;
  let repository: IExampleMongooseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'IFindAllExampleService',
          useClass: FindAllExampleService,
        },
        {
          provide: 'IExampleMongooseRepository',
          useFactory: (): Partial<IExampleMongooseRepository> => ({
            find: jest.fn(async () => [exampleFake as ExampleDocument]),
          }),
        },
      ],
    }).compile();

    service = module.get<IFindAllExampleService>('IFindAllExampleService');
    repository = module.get<IExampleMongooseRepository>(
      'IExampleMongooseRepository',
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('When to execute the method', () => {
    it('Should be find and return a all Example', async () => {
      const repositoryFindAllSpy = jest.spyOn(repository, 'find');

      const response = await service.execute();

      expect(repositoryFindAllSpy).toHaveBeenCalledTimes(1);
      expect(response).toEqual([exampleFake]);
    });
  });
});
