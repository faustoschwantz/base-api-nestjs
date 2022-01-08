import { Test, TestingModule } from '@nestjs/testing';
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
      ],
    }).compile();

    service = module.get<ICreateExampleService>('ICreateExampleService');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
