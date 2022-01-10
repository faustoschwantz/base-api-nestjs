import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateExampleService } from 'src/domain/services/create-example.service';
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
