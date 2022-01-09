import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mongooseInit } from 'src/infrastructure/mongoose/init';
import { typeOrmInit } from 'src/infrastructure/typeorm/init';
import { ExampleModule } from '../example/example.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    mongooseInit(),
    typeOrmInit(),
    ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
