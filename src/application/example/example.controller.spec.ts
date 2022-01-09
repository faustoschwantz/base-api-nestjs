import { Test, TestingModule } from '@nestjs/testing';
import { ICreateExampleService } from 'src/domain/interfaces/services/create-example-service.interface';
import { ExampleController } from './example.controller';

describe('ExampleController', () => {
  let controller: ExampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [
        {
          provide: 'ICreateExampleService',
          useFactory: (): ICreateExampleService => ({
            execute: jest.fn(),
          }),
        },
      ],
    }).compile();

    controller = module.get<ExampleController>(ExampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
