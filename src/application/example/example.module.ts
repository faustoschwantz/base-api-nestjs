import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateExampleService } from 'src/domain/services/create-example.service';
import { UpdateExampleService } from 'src/domain/services/update-example.service';
import { ExampleMongooseRepository } from 'src/infrastructure/mongoose/repositories/example.repository';
import {
  ExampleMongoose,
  ExampleSchema,
} from 'src/infrastructure/mongoose/schemas/example.schema';
import { ExampleTypeOrm } from 'src/infrastructure/typeorm/entities/example.entity';
import { ExampleTypeormRepository } from 'src/infrastructure/typeorm/repositories/example.repository';

import { ExampleController } from './example.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ExampleMongoose.name,
        schema: ExampleSchema,
      },
    ]),
    TypeOrmModule.forFeature([ExampleTypeOrm]),
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
    {
      provide: 'IExampleTypeOrmRepository',
      useClass: ExampleTypeormRepository,
    },
  ],
})
export class ExampleModule {}
