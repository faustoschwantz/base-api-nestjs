import { Test, TestingModule } from '@nestjs/testing';
import { IExampleMongooseRepository } from '../interfaces/repositories/example-mongoose-repository.interface';
import { ICreateExampleService } from '../interfaces/services/create-example-service.interface';
import { CreateExampleService } from './create-example.service';

describe('CreateExampleService', () => {
  let service: ICreateExampleService;

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
            create: jest.fn(),
          }),
        },
      ],
    }).compile();

    service = module.get<ICreateExampleService>('ICreateExampleService');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
