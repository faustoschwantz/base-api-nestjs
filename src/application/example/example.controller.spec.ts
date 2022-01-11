import { Test, TestingModule } from '@nestjs/testing';
import { ICreateExampleService } from 'src/domain/interfaces/services/create-example-service.interface';
import { IDeleteExampleService } from 'src/domain/interfaces/services/delete-example-service.interface';
import { IFindAllExampleService } from 'src/domain/interfaces/services/find-all-example-service.interface';
import { IFindExampleService } from 'src/domain/interfaces/services/find-example-service.interface';
import { IUpdateExampleService } from 'src/domain/interfaces/services/update-example-service.interface';
import { CreateExampleDto } from './dto/create-example.dto';
import { ExampleDto } from './dto/example.dto';
import { ExampleController } from './example.controller';

const exampleFake: ExampleDto = {
  id: 'any-id',
  description: 'any-description',
  enable: false,
};

const createExampleFake: CreateExampleDto = {
  description: 'any-description',
  enable: false,
};

describe('ExampleController', () => {
  let controller: ExampleController;
  let createExampleServiceStub: ICreateExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [
        {
          provide: 'ICreateExampleService',
          useFactory: (): ICreateExampleService => ({
            execute: jest.fn(async () => exampleFake),
          }),
        },
        {
          provide: 'IUpdateExampleService',
          useFactory: (): IUpdateExampleService => ({
            execute: jest.fn(),
          }),
        },
        {
          provide: 'IFindExampleService',
          useFactory: (): IFindExampleService => ({
            execute: jest.fn(),
          }),
        },
        {
          provide: 'IFindAllExampleService',
          useFactory: (): IFindAllExampleService => ({
            execute: jest.fn(),
          }),
        },
        {
          provide: 'IDeleteExampleService',
          useFactory: (): IDeleteExampleService => ({
            execute: jest.fn(),
          }),
        },
      ],
    }).compile();

    controller = module.get<ExampleController>(ExampleController);
    createExampleServiceStub = module.get<ICreateExampleService>(
      'ICreateExampleService',
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(createExampleServiceStub).toBeDefined();
  });

  describe('When to create a Example', () => {
    it('Should be create and return a Example', async () => {
      const createExampleServiceSpy = jest.spyOn(
        createExampleServiceStub,
        'execute',
      );

      const response = await controller.create(createExampleFake);

      expect(createExampleServiceSpy).toHaveBeenCalledWith(createExampleFake);
      expect(response).toEqual(exampleFake);
    });
  });
});
