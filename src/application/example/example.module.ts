import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateExampleService } from 'src/domain/services/create-example.service';
import { DeleteExampleService } from 'src/domain/services/delete-example.service';
import { FindAllExampleService } from 'src/domain/services/find-all-example.service';
import { FindExampleService } from 'src/domain/services/find-example.service';
import { UpdateExampleService } from 'src/domain/services/update-example.service';
import { ExampleMongooseRepository } from 'src/infrastructure/mongoose/repositories/example.repository';
import {
  ExampleMongoose,
  ExampleSchema,
} from 'src/infrastructure/mongoose/schemas/example.schema';

import { ExampleController } from './example.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ExampleMongoose.name,
        schema: ExampleSchema,
      },
    ]),
    // TypeOrmModule.forFeature([ExampleTypeOrm]),
  ],
  controllers: [ExampleController],
  providers: [
    {
      provide: 'ICreateExampleService',
      useClass: CreateExampleService,
    },
    {
      provide: 'IUpdateExampleService',
      useClass: UpdateExampleService,
    },
    {
      provide: 'IFindExampleService',
      useClass: FindExampleService,
    },
    {
      provide: 'IFindAllExampleService',
      useClass: FindAllExampleService,
    },
    {
      provide: 'IDeleteExampleService',
      useClass: DeleteExampleService,
    },
    {
      provide: 'IExampleMongooseRepository',
      useClass: ExampleMongooseRepository,
    },
    // {
    //   provide: 'IExampleTypeOrmRepository',
    //   useClass: ExampleTypeormRepository,
    // },
  ],
})
export class ExampleModule {}
