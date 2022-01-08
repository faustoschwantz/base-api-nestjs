import { Module } from '@nestjs/common';
import { CreateExampleService } from 'src/domain/services/create-example.service';

import { ExampleController } from './example.controller';

@Module({
  controllers: [ExampleController],
  providers: [
    {
      provide: 'ICreateExampleService',
      useClass: CreateExampleService,
    },
  ],
})
export class ExampleModule {}
